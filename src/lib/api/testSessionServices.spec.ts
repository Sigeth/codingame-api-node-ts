import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    startTestSession,
    generateLspToken,
    getPreviousCodeByLanguageId
    } from "./testSessionServices"

const test = anyTest as TestInterface<{ cookies: string }>

test.before(async t => {
    while(t.context.cookies === undefined){
        try {
            const storedCookies = fs.readFileSync("./src/config/cookies.json", "utf-8")

            const parsedCookies = JSON.parse(storedCookies)
            const cookies = parsedCookies.cookies

            t.context.cookies = cookies
        } catch (e) {}
    }
})


test("Starts a test session and then generates a LSP Token", async t => {
    try {

        const testSession = await startTestSession(t.context.cookies, "39816023b3af66e1073d0715f46a950c1e89e998")

        t.assert(testSession !== undefined)

        const lspToken = await generateLspToken(t.context.cookies, testSession.testSessionId)

        t.assert(lspToken !== undefined)

    } catch (e) {
        console.log(e)
    }
})

test("Retrieves the previous code of a puzzle", async t => {
    try {

        const previousCode = await getPreviousCodeByLanguageId(t.context.cookies, "3967834641125caca5dd754076019714205e5961", "C++")

        t.assert(previousCode !== undefined)

    } catch (e) {
        console.log(e)
    }
})