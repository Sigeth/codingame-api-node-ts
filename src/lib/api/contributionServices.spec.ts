import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getContributionById,
    getPendingContributions
    } from "./contributionServices"

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

test("Get pending contributions", async t => {
    try {

        const pendingContributions = await getPendingContributions(t.context.cookies, 1,"ALL",4365603)
        
        t.assert(pendingContributions !== undefined)

    } catch (e) {
        console.log(e)
    }
})

test("Get a contribution by its id", async t => {
    try {

        const contribution = await getContributionById("6648d5564874df8f45e4f0a79f17e723fb02")
        
        t.assert(contribution !== undefined)

    } catch (e) {
        console.log(e)
    }
})