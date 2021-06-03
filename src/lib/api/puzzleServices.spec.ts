import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import { 
    findProgressByIds,
    findAllMinimalProgress,
    findProgressByPrettyId,
    generateSessionFromPuzzlePrettyId
    } from "./puzzleServices"

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

test("Generate a session from a puzzle pretty ID", async t => {
    try {
        const puzzleSession = await generateSessionFromPuzzlePrettyId(t.context.cookies, 4365603, "the-descent")

        t.assert(puzzleSession !== null)
    } catch (e){
        console.log(e)
    }
})