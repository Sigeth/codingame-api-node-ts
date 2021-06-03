import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getCodingamerXpHistory
    } from "./xpServices"

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

test("Get an user xp history", async t => {
    try {

        const xpHistory = await getCodingamerXpHistory(t.context.cookies, 4365603, 50)

        t.assert(xpHistory !== undefined)

    } catch (e) {
        console.log(e)
    }
})