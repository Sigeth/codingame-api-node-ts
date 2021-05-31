import axios from "axios"

import { getCookies, urls } from "../main"

/**
 * Find puzzle informations and player's completion from an array of number IDs.
 * 
 * @param {number[]} ids - Every Puzzle IDs you want to inspect
 * @param {number} userId - User ID you want to retrieve the completion
 * 
 */

export const findProgressByIds = async (ids: number[], userId: number): Promise<IPuzzleProgress[]> => {

    const response = await axios({
        url: urls.puzzle + "findProgressByIds",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [ ids, userId, 1 ]
    })

    return response["data"]
}


/**
 * Find puzzle informations and player's completion from a "pretty ID" which is a string, found in the URL of the puzzle.
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're loggin in with loginSite
 * @param {string} puzzlePrettyId - Puzzle's "pretty ID", found in its URL.
 * @param {number} userId - User ID you want to retrieve the completion
 */

export const findProgressByPrettyId = async (cookies: string, puzzlePrettyId: string, userId: number): Promise<IPuzzlePrettyProgress> => {

    const response = await axios({
        url: urls.puzzle + "findProgressByPrettyId",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ puzzlePrettyId, userId ]
    })

    return response["data"]
}


/**
 * Find every minimal puzzle progress from a user. You can also use this to get every puzzles of CodinGame
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're loggin in with loginSite
 * @param {number} userId - User ID you want to retrieve the completion
 * 
 */

export const findAllMinimalProgress = async (cookies: string, userId: number): Promise<IPuzzleMinimalProgress[]> => {

    const response = await axios({
        url: urls.puzzle + "findAllMinimalProgress",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId ]
    })

    return response["data"]
}



export interface IPuzzleProgress {
    id: number
    level: string
    rank: number
    thumbnailBinaryId: number
    previewBinaryId: number
    coverBinaryId: number
    logoBinaryId: number
    title: string
    description: string
    validatorScore: number
    achievementCount: number
    doneAchievementCount: number
    forumLink: string
    chatRoom: string
    solvedCount: number
    attemptCount: number
    xpPoints: number
    feedback: feedbackPuzzle
    topics: topics[]
    creationTime: number
    type: string
    prettyId: string
    detailsPageUrl: string
    replayIds: number[]
    communityCreation: boolean
}

type feedbackPuzzle = {
    feedbackId: number
    feedbacks: number[]
}

type topics = {
    handle: string
    category: string
    value: string
    children: topics[] | []
}

export interface IPuzzlePrettyProgress {
    id: number
    level: string
    rank: number
    thumbnailBinaryId: number
    previewBinaryId: number
    coverBinaryId: number
    logoBinaryId: number
    title: string
    titlemap: {
        "1": string,
        "2": string
    }
    description: string
    statement: string
    validatorScore: number
    achievementCount: number
    doneAchievementCount: number
    linkedAchievements: linkedAchievement[]
    forumLink: string
    solvedCount: number
    attemptCount: number
    xpPoints: number
    feedback: feedbackPuzzle
    topics: topics[]
    creationTime: number
    type: string
    prettyId: string
    detailsPageUrl: string
    replayIds: number[]
    contentDetails: puzzleDetails
    communityCreation: boolean
}

type linkedAchievement = {
    id: string
    puzzleId: number
    title: string
    description: string
    points: number
    progress: number
    progressMax: number
    completionTime: number
    imageBinaryId: number
    level: string
    weight: number
}

type puzzleDetails = {
    description: string
    learnDescription: string
    story: string
    externalResources: externalResource[]
}

type externalResource = {
    publicId: string
    url: string
    name: string
}

export interface IPuzzleMinimalProgress {
    id: number
    level: string
    validatorScore: number
    submitted: boolean
    creationTime: number
    rank: number
    solvedCount: number
    communityCreation: boolean
    feedback: feedbackPuzzle
}