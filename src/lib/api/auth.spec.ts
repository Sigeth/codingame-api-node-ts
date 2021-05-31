import dotenv from 'dotenv'
dotenv.config()

const fs = require("fs")

import anyTest, { TestInterface } from 'ava'

import { loginCodinGamer } from "./auth"

const test = anyTest as TestInterface<{ email: string, pw: string }>

test.before(async t => {
    const email = process.env.EMAILTEST!
    const pw = process.env.PWTEST!

    t.context.email = email
    t.context.pw = pw
})

test("Login to CodinGame", async t => {
    try {
        const session = await loginCodinGamer(t.context.email, t.context.pw)
        
        const JSONcookies = { cookies: session.cookies }
        const storedCookies = JSON.stringify(JSONcookies)

        fs.writeFile("./src/config/cookies.json", storedCookies, function(err: any){
            if (err) {
                return console.log(err)
            }
        })

        t.assert(session.userId === 4365603)

    } catch (e){
        console.log(e)
    }
})