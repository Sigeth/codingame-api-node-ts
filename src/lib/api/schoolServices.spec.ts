import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getSchoolsByQuery
    } from "./schoolServices"

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

test("Get schools with a query", async t => {
    try {

        const schools = await getSchoolsByQuery(t.context.cookies, 4365603, "epitech")
        
        t.assert(schools !== undefined)

    } catch (e) {
        console.log(e)
    }
})