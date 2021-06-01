import axios from "axios"

import { urls } from "../main"


/**
 * Get every pending contributions, that wait to be validated
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} page - Pending contribution's page
 * @param {string} filter - Filter. Can be "ALL", "CLASHOFCODE" or "PUZZLE"
 * @param {number} userId - User's ID
 * 
 */

export const getPendingContributions = async (cookies: string, page: number, filter: string, userId: number): Promise<IPendingContribution[]> => {
    
    const response = await axios({
        url: urls.contribution + "getAllPendingContributions",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ page, filter, userId ]
    })

    return response["data"]
}

export interface IPendingContribution {
    id: number
    activeVersion: number
    score: number
    votableId: number
    codingamerId: number
    views: number
    commentableId: number
    title: string
    status: string
    type: string
    nickname: string
    publicHandle: string
    codingamerHandle: string
    autocloseTime: number
    commentCount: number
    upVotes: number
    downVotes: number
    validateAction: actionStatus | undefined
    denyAction: actionStatus | undefined
    statusHistory: statusHistory[]
    publicationDate: number
    editable: boolean
    draft: boolean
    readyForModeration: boolean
    userModerationStatus: string
}

type actionStatus = {
    actionId: number
    progress: number
    alreadyDone: boolean
}

type statusHistory = {
    status: string
    date: number
    data: dataStatus
}

type dataStatus = {
    author: string
    reason: string
}