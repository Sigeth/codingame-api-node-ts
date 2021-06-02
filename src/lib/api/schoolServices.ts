import axios from "axios"

import { urls } from "../main"


/**
 * Get schools from a query
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * @param {string} searchQuery - Query search to find the companies
 * 
 */

export const getSchoolsByQuery = async (cookies: string, userId: number, searchQuery: string): Promise<ISchool[]> => {
    
    const response = await axios({
        url: urls.school + "findSchools",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId, searchQuery ]
    })

    return response["data"]
}

export interface ISchool {
    schoolId: number
    name: string
    city: string
    countryId: string
    verified: boolean
    invalid: boolean
    preferredLabel: string
    googlePlaceId: string
    codinGamerCount: number
}