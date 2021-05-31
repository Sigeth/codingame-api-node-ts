import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getPastChallenges
    } from "./challengeServices"

    const test = anyTest as TestInterface<{ cookies: string }>

test.before(async t => {
    const storedCookies = fs.readFileSync("./src/config/cookies.json", "utf-8")

    const parsedCookies = JSON.parse(storedCookies)
    const cookies = parsedCookies.cookies

    t.context.cookies = cookies
})

test("Get the past challenges", async t => {
    try {

        const pastChallenges = await getPastChallenges(t.context.cookies, 4365603)

        const title = pastChallenges[0].title
        
        t.assert(pastChallenges[0].title === title)

    } catch (e) {
        console.log(e)
    }
})