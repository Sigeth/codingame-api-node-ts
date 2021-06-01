import axios from "axios"

import { urls } from "../main"


/**
 * Get the pending clashes, games that wait players
 * 
 */

export const getPendingClashes = async (): Promise<IPendingClash[]> => {
    
    const response = await axios({
        url: urls.coc + "findPendingClashes",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: []
    })

    return response["data"]
}

export interface IPendingClash {
    nbPlayersMin: number
    nbPlayersMax: number
    publicHandle: string
    clashDurationTypeId: string
    creationTime: string
    startTime: string
    msBeforeStart: number
    finished: boolean
    started: boolean
    publicClash: boolean
    players: player[]
}

type player = {
    codingamerId: number
    codingamerNickname: string
    codingamerHandle: string
    codingamerAvatarId: number
    duration: number
    status: string
}