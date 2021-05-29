import anyTest, { TestInterface } from 'ava'

import { 
    findProgressByIds,
    findAllMinimalProgress
    } from "./puzzleServices"

const test = anyTest as TestInterface<{}>

test("Retrieving infos from several puzzles", async t => {
    try {
        const puzzlesInfos = await findProgressByIds([49, 42, 37, 36], 4365603)

        t.assert(puzzlesInfos.length === 4)
    } catch (e){
        console.log(e)
    }
})

test("Retrieving all minimal puzzle progress", async t => {
    try {
        const puzzlesProgress = await findAllMinimalProgress(4365603)

        t.assert(puzzlesProgress[0] !== null)
    } catch (e){
        console.log(e)
    }
})
