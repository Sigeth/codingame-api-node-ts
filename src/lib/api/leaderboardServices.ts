import axios from "axios"

import { urls } from "../main"


/**
 * Get the global leaderboard
 * 
 * @param {number} page - Leaderboard's Page
 * @param {string} category - Leaderboard's category. Can be GENERAL, CONTESTS, BOT_PROGRAMMING, OPTIM or CODEGOLF
 * @param {{active: boolean, column: string, filter: string, keyword: string}} filter - Leaderboard's filter
 * @param {string} codinGamerPublicHandle - Public Handle from the CodinGamer
 * 
 */

export const getGlobalLeaderboard = async (page: number, category:string, filter: {active: boolean, column: string, filter: string, keyword: string}, codinGamerPublicHandle: string): Promise<IGlobalLeaderboard> => {
    
    const response = await axios({
        url: urls.leaderboards + "getGlobalLeaderboard",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [page, category, filter, codinGamerPublicHandle, true, "global"]
    })

    return response["data"]
}


/**
 * Get the Clash Of Code Leaderboard
 * 
 * @param {number} page - Leaderboard's page
 * @param {{active: boolean, column: string, filter: string, keyword: string}} filter - Leaderboar's filter
 * @param {string} codinGamerPublicHandle - Public Handle from the CodinGamer
 * 
 */

 export const getClashLeaderboard = async (page: number, filter: {active: boolean, column: string, filter: string, keyword: string}, codinGamerPublicHandle: string): Promise<IClashLeaderboard> => {
    
    const response = await axios({
        url: urls.leaderboards + "getClashLeaderboard",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [page, filter, codinGamerPublicHandle, true, "global", null]
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
    school: string | undefined
    company: string | undefined
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

export interface IClashLeaderboard {
    users: clashLeaderboardUser[]
    count: number
    filteredCount: number
}

type clashLeaderboardUser = {
    pseudo: string
    rank: number
    globalRank: number
    localRank: number
    score: number
    inProgress: boolean
    school: string | undefined
    company: string | undefined
    codingamer: codingamer
    clashesCount: number
}