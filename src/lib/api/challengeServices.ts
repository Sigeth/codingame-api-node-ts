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

/**
 * Get a challenge with its public ID
 * 
 * @param {string} publicId - Challenge's public ID
 * 
 */

export const getChallengeByPublicId = async (publicId: string): Promise<IChallenge> => {
    
    const response = await axios({
        url: urls.challenge + "findWorldCupByPublicId",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: [ publicId, null ]
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

export interface IChallenge {
    challenge: challenge
    jobOffers: any[]
    teasers: any[]
}

type challenge = {
    challengeId: number
    title: string
    date: number
    utc: number
    enable: boolean
    testId: number
    placesOnlineAvailable: number
    placesOnSiteAvailable: number
    placesOnlineMax: number
    placesOnSiteMax: number
    challengerSubscriptionSeq: number
    registeredChallengerCount: number
    subscriptionOpened: boolean
    challengeForm: {}
    visible: boolean
    enableSelectCompany: boolean
    reportEnabled: boolean
    lateTimeMax: number
    subscribedLabelId: number
    needLogin: boolean
    enableScoreGlobal: boolean
    jobScoreGlobal: boolean
    mailinglist: boolean
    publicId: string
    enableIcal: boolean
    mailGroupId: number
    type: string
    startInMillis: number
    rankingCompleted: boolean
    needPreRegistration: boolean
    shareable: boolean
    delayRedirectRankingWhenFinished: number
    applicationEndDate: number
    applicationContactEndDate: number
    training: boolean
    vip: boolean
    finished: boolean
    closed: boolean
    started: boolean
    privateEvent: boolean
    defaultAi: boolean
    logoId: number
    cover1Id: number
    cover2Id: number
    coverMetaId: number
    descriptionJson: string
    registrationEnable: boolean
    isolated: boolean
    enableLeaderboard: boolean
    enableSocialLogin: boolean
    endApplicationsDate: number
    applicationsClosed: boolean
    customFormId: number
    authors: any[]
    clashHubs: any[]
    formFieldsShownInLeaderboard: any[]
    enableSchoolCompanyLeaderboard: boolean
    disableReplays: boolean
}