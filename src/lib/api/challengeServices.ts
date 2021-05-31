import axios from "axios"

import { urls } from "../main"


/**
 * Get the past challenges.
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * 
 */

export const getPastChallenges = async (cookies: string, userId: number): Promise<IPastChallenge[]> => {
    
    const response = await axios({
        url: urls.challenge + "findPastChallenges",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId ]
    })

    return response["data"]
}


export interface IPastChallenge {
    title: string
    date: number
    publicId: string
    cover1Id: number
    logoId: number
    descriptionJson: string | undefined
    endApplicationsDate: number
    applicationsClosed: boolean
}