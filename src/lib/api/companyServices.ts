import axios from "axios"

import { urls } from "../main"


/**
 * Get companies from a query
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * @param {string} searchQuery - Query search to find the companies
 * 
 */

export const getCompaniesByQuery = async (cookies: string, userId: number, searchQuery: string): Promise<ICompany[]> => {
    
    const response = await axios({
        url: urls.company + "findCompanies",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId, searchQuery ]
    })

    return response["data"]
}

export interface ICompany {
    company: company
    codinGamerCount: number
}

type company = {
    name: string
    logoBinaryId: number | undefined
    domain: string | undefined
}