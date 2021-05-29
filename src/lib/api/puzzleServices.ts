import axios from "axios"

import { urls } from "../main"

/**
 * Find puzzle informations and player's completion from an array
 * 
 * @param {number[]} ids - Every Puzzle IDs you want to inspect
 * @param {number} userId - The user ID you want to retrieve the completion
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