import anyTest, { TestInterface } from 'ava'

import { findProgressByIds } from "./puzzleServices"

const test = anyTest as TestInterface<{}>

test("Retrieving infos from several puzzles", async t => {
    try {
        const puzzlesInfos = await findProgressByIds([49, 42, 37, 36], 4365603)

        t.assert(puzzlesInfos.length === 4)
    } catch (e){
        console.log(e)
    }
})