import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getChallengeByPublicId,
    getPastChallenges
    } from "./challengeServices"

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

test("Get the past challenges", async t => {
    try {

        const pastChallenges = await getPastChallenges(t.context.cookies, 4365603)

        const title = pastChallenges[0].title
        
        t.assert(pastChallenges[0].title === title)

    } catch (e) {
        console.log(e)
    }
})

test("Get a challenge by its public id", async t => {
    try {

        const challenge = await getChallengeByPublicId("spring-challenge-2021")
        
        t.assert(challenge.challenge.title === "Spring Challenge 2021")

    } catch (e) {
        console.log(e)
    }
})