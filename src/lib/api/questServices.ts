import axios from "axios"

import { urls } from "../main"


/**
 * Get CodinGamer's quest map, that you find on the homepage
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * 
 */

export const getQuestMap = async (cookies: string, userId: number): Promise<IQuestMap> => {
    
    const response = await axios({
        url: urls.quest + "findQuestMap",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId ]
    })

    return response["data"]
}

export interface IQuestMap {
    nodes: node[]
    links: link[]
}

type node = {
    quest: quest
    codingamerQuest: codingamerQuest | undefined
    id: number
    type: string
    x: number
    y: number
}

type quest = {
    id: number
    type: string
    details: details
}

type details = {
    handle: string
    title: string
    description: string
    progressTitle: string
    progressMax: number
    rewards: reward[]
}

type reward = {
    id: number
    type: string
    data: { description : { en: string, fr: string } }
}

type codingamerQuest = {
    questId: number
    progress: number
    creationTime: number
    completionTime: number
    lootTime: number
}

type link = {
    fromNodeId: number
    toNodeId: number
    path: coords[]
}

type coords = {
    x: number
    y: number
}