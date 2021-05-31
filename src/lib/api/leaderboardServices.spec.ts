import anyTest, { TestInterface } from 'ava'

import {
    getGlobalLeaderboard,
    getClashLeaderboard
    } from "./leaderboardServices"

const test = anyTest as TestInterface<{}>

test("Get the global leaderboard", async t => {
    try {

        const filter = {
            active: true,
            column: "",
            filter: "",
            keyword: ""
        }

        const globalLeaderboard = await getGlobalLeaderboard(1, "GENERAL", filter, "1c441f9ce0ec064cbc1f51410b6806ba3065634")
        
        t.assert(globalLeaderboard.users[0].rank === 1)

    } catch (e) {
        console.log(e)
    }
})


test("Get the Clash Of Code leaderboard", async t => {
    try {

        const filter = {
            active: true,
            column: "",
            filter: "",
            keyword: ""
        }

        const clashLeaderboard = await getClashLeaderboard(1, filter, "1c441f9ce0ec064cbc1f51410b6806ba3065634")

        t.assert(clashLeaderboard.users[0].rank === 1)

    } catch (e) {
        console.log(e)
    }
})