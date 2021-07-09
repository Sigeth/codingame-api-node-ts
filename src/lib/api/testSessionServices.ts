import axios from "axios"

import { urls } from "../main"


/**
 * Starts a test session, used for testing the code
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {string} sessionHandle - session handle generated by others functions, such as generateSessionFromPuzzlePrettyId
 * 
 */

export const startTestSession = async (cookies: string, sessionHandle: string): Promise<ITestSession> => {
    
    const response = await axios({
        url: urls.testsession + "startTestSession",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ sessionHandle ]
    })

    return response["data"]
}

/**
 * Generates a LSP token encoded in base64 from a test session Id
 * 
 * ## Requires to log in before.
 * 
 * @param {string} cookies - The cookies string that you obtain when you're logging in with loginCodinGamer
 * @param {number} testSessionId - Test Session Id where the user is currently in
 * 
 */

 export const generateLspToken = async (cookies: string, testSessionId: number): Promise<ILspToken> => {
    
    const response = await axios({
        url: urls.testsession + "generateLspToken",
        method: "post",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            "cookie": cookies
        },
        data: [ testSessionId ]
    })

    return {token: response["data"]}
}


export interface ITestSession {
    puzzle: puzzle
    testType: string
    currentQuestion: currentQuestion
    direct: boolean
    questions: question[]
    testSessionId: number
    testSessionHandle: string
    needAccount: boolean
    shareable: boolean
    userId: number
    showReplayPrompt: boolean
}

type puzzle = {
    forumPostId: string
    title: string
    previewBinaryId: number
    id: number
    hints: hint[]
    level: string
    prettyId: string
    detailsPageUrl: string
}

type hint = {
    hintId: number
    content: string
    title: string
    index: number
    unlockSolution: boolean
    unlockPseudoCode: boolean
}

type currentQuestion = {
    question: puzzleQuestion
    answer: {}
}

type puzzleQuestion = {
    viewer: string
    testCases: testCase[]
    languages: string[]
    availableLanguages: availableLanguage[]
    stubGenerator: string
    id: number
    initialId: number
    type: string
    statement: string
    duration: number
    userId: number
    index: number
    title: string
}

type testCase = {
    index: number
    inputBinaryId: number
    outputBinaryId: number
    label: string
}

type availableLanguage = {
    id: string
    name: string
}

type question = {
    questionId: number
    title: string
    hasResult: boolean
}

export interface ILspToken {
    token: string
}