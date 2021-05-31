import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import { 
    findProgressByIds,
    findAllMinimalProgress,
    findProgressByPrettyId
    } from "./puzzleServices"

const test = anyTest as TestInterface<{ cookies: string }>

test.before(async t => {
    const storedCookies = fs.readFileSync("./src/config/cookies.json", "utf-8")

    const parsedCookies = JSON.parse(storedCookies)
    const cookies = parsedCookies.cookies

    t.context.cookies = cookies
})

test("Retrieving infos from several puzzles", async t => {
    try {
        const puzzlesInfos = await findProgressByIds([49, 42, 37, 36], 4365603)

        t.assert(puzzlesInfos.length === 4)
    } catch (e){
        console.log(e)
    }
})

test("Retrieving infos from a puzzle from its pretty ID", async t => {
    try {
        const puzzlePrettyInfos = await findProgressByPrettyId(t.context.cookies, "onboarding", 4365603)

        t.assert(puzzlePrettyInfos.id === 43)
    } catch (e){
        console.log(e)
    }
})

test("Retrieving all minimal puzzle progress", async t => {
    try {
        const puzzlesProgress = await findAllMinimalProgress(t.context.cookies, 4365603)

        t.assert(puzzlesProgress[0] !== null)
    } catch (e){
        console.log(e)
    }
})
