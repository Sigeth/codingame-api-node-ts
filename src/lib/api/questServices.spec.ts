import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import { 
    getQuestMap
    } from "./questServices"

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

test("Get user's quest map", async t => {
    try {

        const questMap = await getQuestMap(t.context.cookies, 4365603)
        
        t.assert(questMap !== undefined)

    } catch (e) {
        console.log(e)
    }
})