import axios from "axios"

import { urls } from "../main"


/**
 * Get every published courses by ids provided
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} userId - User's ID
 * @param {number[]} coursesId - List containing every courses you want to get infos
 * 
 */

export const getPublishedCoursesByIds = async (cookies: string, userId: number, coursesId: number[]): Promise<ICourse> => {
    
    const response = await axios({
        url: urls.course + "findPublishedCoursesByIdsAndUserId",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ userId, coursesId ]
    })

    return response["data"]
}

export interface ICourse {
    id: number
    title: string
    lastVersionId: number
    courseCreatorId: number
    publicPath: string
    author: author
    coverBinaryId: number
    views: number
    likes: number
    liked: boolean
    disqusIdentifier: string
    firstPublishedDate: number
    contentLanguage: string
    tagIds: number[]
}

type author = {
    userId: number
    pseudo: string | undefined
    publicHandle: string
    enable: boolean
    avatar: number | undefined
    cover: number | undefined
    tagline: string | undefined
    level: number
    biography: string | undefined
}