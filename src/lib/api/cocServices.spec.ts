import anyTest, { TestInterface } from 'ava'

import {
    getPendingClashes
    } from "./cocServices"

const test = anyTest as TestInterface<{}>

test("Get the pending clashes", async t => {
    try {

        const pendingClashes = await getPendingClashes()
        
        t.assert(pendingClashes !== undefined)

    } catch (e) {
        console.log(e)
    }
})