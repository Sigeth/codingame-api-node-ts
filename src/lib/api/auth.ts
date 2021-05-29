import axios from "axios"

import { urls } from "../main"


/**
 * Login to CodinGame as a CodinGamer
 * 
 * @param {string} email - Account Email
 * @param {string} password - Account Password
 * 
 */

export const loginCodinGamer = async (email: string, password: string): Promise<ILoginCodinGamer> => {
    
    const response = await axios({
        url: urls.codingamer + "loginSite",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [email, password, true, "CODINGAME"]
    })

    return response["data"]
}

export interface ILoginCodinGamer {
    codinGamer: codinGamer
    countryCode: string
    newFeatures: any[]
    enabledNotifications: string[]
    notificationConfig: notificationConfig
    activatedFeatures: string[]
    actionTypes: actionTypes
    chatToken: string
    disqusSsoPayload: string
    gaveFeedbackOnCurrentCompany: boolean
    xpThresholds: xpThresholds[]
    user: codinGameUser
    visitor: boolean
    admin: boolean
    languageId: number
    userId: number
    userEmail: string
    impersonated: boolean
}

type codinGamer = {
    globalId: string
    userId: number
    email: string
    countryId: string
    publicHandle: string
    privateHandle: string
    formValues: {}
    registerOrigin: string
    enable: boolean
    rank: number
    formCachedValues: {}
    creationTime: number
    onlineSince: number
    hiddenFromFriendFinder: boolean
    shareAllSolutions: boolean
    level: number
    xp: number
    category: string
    privateUser: boolean
    createdCoursesCount: number
    alreadyAnsweredOptin: boolean
}
type notificationConfig = {
    soundEnabled: boolean
    nativeNotificationEnabled: boolean
}

type actionTypes = {
    deleteContribution: actionTypesData
    receiveCareerNotification: actionTypesData
    deleteComment: actionTypesData
    submitMultiContribution: actionTypesData
    sendPingEmailToAll: actionTypesData
    accessCoursesBeta: actionTypesData
    editAcceptedContribution: actionTypesData
    hideStream: actionTypesData
    updateAvatar: actionTypesData
    updateAllAvatar: actionTypesData
    accessDisabledLeaderboard: actionTypesData
    impersonate: actionTypesData
    editComment: actionTypesData
    editContribution: actionTypesData
    denyPuzzleConfirmation: actionTypesData
    sendPingEmailToOptinCodingamers: actionTypesData
    denyClashContribution: actionTypesData
    validateClashContribution: actionTypesData
    sendPrivateMessageToAll: actionTypesData
    denyContribution: actionTypesData
    editClashContribution: actionTypesData
    updateCover: actionTypesData
    editPuzzleContribution: actionTypesData
    sendPrivateMessageToOptinCodingamers: actionTypesData
    editAcceptedPuzzleContribution: actionTypesData
    updateCareerSettings: actionTypesData
    editAcceptedClashContribution: actionTypesData
    validateContribution: actionTypesData
    validatePuzzleContribution: actionTypesData
    banStreamer: actionTypesData
    updateAllCover: actionTypesData
}

type actionTypesData = {
    minCodinGamerCount: null | number
    authorPolicy: string
}

type xpThresholds = {
    level: number
    xpThreshold: number
    cumulativeXp: number
    rewardLanguages: rewardLanguages | null
}

type rewardLanguages = {
    "1": string
    "2": string
}

type codinGameUser = {
    id: number
    email: string
    languageId: number
    status: string
    properties: userProperties
}

type userProperties = {
    xpConfig: userXpConfig
    "privacySettings-codingame": userPrivacySettings
    abtesting: userAbtesting
    "cookiesBanner-codingame": userCookiesBanner
}

type userXpConfig = {
    lastTotalXp: number
}

type userPrivacySettings = {
    facebook: boolean
    analytics: boolean
    advertising: boolean
}

type userAbtesting = {
    "Quick AB 1": string
}

type userCookiesBanner = {
    seen: boolean
}

