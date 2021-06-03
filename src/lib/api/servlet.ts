import axios from "axios"

import { urls } from "../main"


/**
 * Get a file from its id
 * 
 * @param {number} fileId - File's ID (can be referred as binary ID)
 * @param {string} format - File's format. Can be profile_avatar, playground_card_cover or can also be not declared
 * 
 */

export const getFileFromId = async (fileId: number, format?: string): Promise<IFile> => {
    
    if (format !== undefined) {
        const url: string = urls.servlet + "fileservlet?id=" + fileId + "&format=" + format

        const response = await axios({
            url: url,
            method: "get"
        })

        return { link: url, file: response["data"] }

    } else {
        const url: string = urls.servlet + "fileservlet?id=" + fileId

        const response = await axios({
            url: url,
            method: "get"
        })

        return { link: url, file: response["data"] }
    }
}

export interface IFile {
    link: string
    file: any
}