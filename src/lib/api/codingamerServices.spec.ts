import anyTest, { TestInterface } from 'ava'

import {
    getCodingamerPointsStats,
    getCodingamerAchievements
    } from "./codingamerServices"

const test = anyTest as TestInterface<{}>

test("Get codingamer stats and points", async t => {
    try {

        const codingamerPointsStats = await getCodingamerPointsStats("8374201b6f1d19eb99d61c80351465b65150051")
        
        t.assert(codingamerPointsStats !== undefined)

    } catch (e) {
        console.log(e)
    }
})

test("Get codingamer achievements", async t => {
    try {

        const codingamerAchievements = await getCodingamerAchievements(4365603)
        
        t.assert(codingamerAchievements !== undefined)

    } catch (e) {
        console.log(e)
    }
})