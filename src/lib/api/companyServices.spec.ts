import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getCompaniesByQuery
    } from "./companyServices"

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

test("Get companies with a query", async t => {
    try {

        const companies = await getCompaniesByQuery(t.context.cookies, 4365603, "codingame")
        
        t.assert(companies !== undefined)

    } catch (e) {
        console.log(e)
    }
})