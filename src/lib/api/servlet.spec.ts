import anyTest, { TestInterface } from 'ava'

const fs = require("fs")

import {
    getFileFromId
    } from "./servlet"

const test = anyTest as TestInterface<{}>

test("Get a file from its id", async t => {
    try {

        const file = await getFileFromId(58249346232056)

        t.assert(file !== undefined)

    } catch (e) {
        console.log(e)
    }
})