import axios from "axios"

import { urls } from "../main"


/**
 * Get the global leaderboard
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * @param {number} limit - The limit of the history. For example, a limit of 50 will return a list of 50 objects, if there are at least 50 objects
 * 
 */

export const getCodingamerXpHistory = async (cookies: string, userId: number, limit: number): Promise<IXpEntry[]> => {
    
    const response = await axios({
        url: urls.xp + "findCodingamerXpHistory",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId, limit, null ]
    })

    return response["data"]
}


export interface IXpEntry {
    xpHistoryId: number
    codingamerId: number
    date: number
    xpPoints: number
    xpSource: string
    level: number
    data: xpData
    quest: xpQuest | undefined
    achievement: xpAchievement | undefined
}

type xpData = {
    id_quest: number | undefined
    id_reward: number | undefined
    idAchievement: string | undefined
}

type xpQuest = {
    questId: number
    titleMap: titleMap
}

type xpAchievement = {
    id: string
    points: number
    titleMap: titleMap
    progressMax: number
    weight: number
}

type titleMap = {
    "1": string
    "2": string
}