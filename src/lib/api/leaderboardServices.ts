import axios from "axios"

import { urls, getCookies } from "../main"


/**
 * Get the global leaderboard
 * 
 * @param {number} page - Leaderboard's Page
 * @param {{active: boolean, column: string, filter: string, keyword: string}} filter - Leaderboard's filter
 * @param {string} codinGamerPublicHandle - Public Handle from the CodinGamer
 * 
 */

export const getGlobalLeaderboard = async (page: number, filter: {active: boolean, column: string, filter: string, keyword: string}, codinGamerPublicHandle: string): Promise<IGlobalLeaderboard> => {
    
    const response = await axios({
        url: urls.leaderboards + "getGlobalLeaderboard",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [page, "GENERAL", filter, codinGamerPublicHandle, true, "global"]
    })

    return response["data"]
}

export interface IGlobalLeaderboard {
    users: leaderboardUser[]
    count: number
    filteredCount: number
}

type leaderboardUser = {
    pseudo: string
    rank: number
    score: number
    achievements: number
    contests: number
    multiTraining: number
    optim: number
    codegolf: number
    clash: number
    xp: number
    inProgress: boolean
    school: string | null
    company: string | null
    codingamer: codingamer
}

type codingamer = {
    userId: number
    pseudo: string
    countryId: string
    publicHandle: string
    avatar: number
    level: number
    category: string
}