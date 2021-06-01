import axios from "axios"

import { urls } from "../main"


/**
 * Get user's career data.
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * 
 */

export const getCareerData = async (cookies: string, userId: number): Promise<ICareerData> => {
    
    const response = await axios({
        url: urls.career + "getCareerData",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId ]
    })

    return response["data"]
}

export interface ICareerData {
    salary: string
    source: string
    jobType: string[]
    contract: string[]
    location: location[]
    experience: number
    motivation: string
    linkedInUrl: string
    careerWishes: string
    contactEmail: string
    technologies: string[]
    blockITServices: boolean
    "salary-currency": string
}

type location = {
    place_id: string
    description: string
}