import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getPublishedCoursesByIds
    } from "./courseServices"

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

test("Get some courses infos", async t => {
    try {

        const courses = await getPublishedCoursesByIds(t.context.cookies, 4365603, [57133, 56997])
        
        t.assert(courses !== undefined)

    } catch (e) {
        console.log(e)
    }
})