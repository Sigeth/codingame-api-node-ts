import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    startTestSession,
    generateLspToken
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