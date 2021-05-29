import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { loginCodinGamer } from "./auth"

const test = anyTest as TestInterface<{ email: string, password: string }>

test("Login to CodinGame", async t => {
    try {
        const session = await loginCodinGamer(process.env.EMAILTEST!, process.env.PWTEST!)

        t.assert(session.userId === 4365603)
    } catch (e){
        console.log(e)
    }
})