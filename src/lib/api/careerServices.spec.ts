import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getCareerData
    } from "./careerServices"

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

test("Get the user's career data", async t => {
    try {

        const careerData = await getCareerData(t.context.cookies, 4365603)
        
        t.assert(careerData.source === "header")

    } catch (e) {
        console.log(e)
    }
})