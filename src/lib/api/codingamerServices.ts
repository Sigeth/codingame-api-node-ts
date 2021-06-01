import axios from "axios"

import { urls } from "../main"


/**
 * Get the pending clashes, games that wait players
 * 
 * @param {string} publicId - public ID of the player
 * 
 */

export const getCodingamerPointsStats = async (publicId: string): Promise<ICodingamerPointsStats> => {
    
    const response = await axios({
        url: urls.codingamer + "findCodingamePointsStatsByHandle",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [ publicId ]
    })

    return response["data"]
}


export interface ICodingamerPointsStats {
    codingamerPoints: number
    achievementCount: number
    codingamer: codingamer
    codingamePointsRankingDto: pointsRankingDto
    xpThresholds: xpThreshold[]
}

type codingamer = {
    userId: number
    pseudo: string
    countryId: string
    publicHandle: string
    formValues: formValues
    enable: boolean
    schoolId: number | undefined
    rank: number
    avatar: number
    cover: number
    tagline: string
    company: string | undefined
    city: string
    level: number
    xp: number
    category: string
    biography: string
}

type formValues = {
    city: string
    school: string | undefined
}

type pointsRankingDto = {
    rankHistorics: rankHistorics
    codingamePointsTotal: number
    codingamePointsRank: number
    codingamePointsContests: number
    codingamePointsAchievements: number
    codingamePointsXp: number
    codingamePointsOptim: number
    codingamePointsCodegold: number
    codingamePointsMultiTraining: number
    codingamePointsClash: number
    numberCodingamers: number
    numberCodingamersGlobal: number
}

type rankHistorics = {
    ranks: number[]
    totals: number[]
    points: number[]
    contestPoints: number[]
    optimPoints: number[]
    codegolfPoints: number[]
    multiTrainingPoints: number[]
    clashPoints: number[]
    dates: number[]
}

type xpThreshold = {
    level: number
    xpThreshold: number
    cumulativeXp: number
}