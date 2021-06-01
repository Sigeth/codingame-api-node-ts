import anyTest, { TestInterface } from 'ava'

import {
    getCodingamerPointsStats
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