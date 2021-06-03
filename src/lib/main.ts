const fs = require("fs")

/** @internal */
export const urls = {
    achievement: "https://www.codingame.com/services/Achievement/",
    career: "https://www.codingame.com/services/Career/",
    challenge: "https://www.codingame.com/services/Challenge/",
    coc: "https://www.codingame.com/services/ClashOfCode/",
    codingamer: "https://www.codingame.com/services/CodinGamer/",
    comment: "https://www.codingame.com/services/Comment/",
    company: "https://www.codingame.com/services/Company/",
    contribution: "https://www.codingame.com/services/Contribution/",
    course: "https://www.codingame.com/services/course/",
    help: "https://www.codingame.com/services/Help/",
    leaderboards: "https://www.codingame.com/services/Leaderboards/",
    notification: "https://www.codingame.com/services/Notification/",
    puzzle: "https://www.codingame.com/services/Puzzle/",
    quest: "https://www.codingame.com/services/Quest/",
    school: "https://www.codingame.com/services/School/",
    testsession: "https://www.codingame.com/services/TestSession/",
    vote: "https://www.codingame.com/services/Vote/",
    xp: "https://www.codingame.com/services/Xp/",
    servlet: "https://www.codingame.com/servlet/"
}

/** @internal */
export const getCookies = (response: any): string => {
    const cookies = response.headers["set-cookie"]
    var cookiesStr = cookies.map((el: string, i: number) => {
        const elSplit = el.split(";")
        if (i !== cookies.length - 1) {
            return elSplit[0] + "; "
        } else {
            return elSplit[0]
        }
    }).join("")

    return cookiesStr
}