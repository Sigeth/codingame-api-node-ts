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
    xp: "https://www.codingame.com/services/Xp/"
}

/** @internal */
export const setCookies = (response: any) => {
    const cookies = response["set-cookie"]
    var cookiesStr = cookies.map((el: string, i: number) => {
        const elSplit = el.split(";")
        if (i !== cookies.length - 1) {
            return elSplit[0] + "; "
        } else {
            return elSplit[0]
        }
    }).join("")

    const storedCookiesJSON = { cookies: cookiesStr }
    const storedCookies = JSON.stringify(storedCookiesJSON)

    fs.writeFile("./src/config/cookies.json", storedCookies, function(err: any){
        if (err) {
            return console.log(err)
        }
    })
}

/** @internal */
export const getCookies = (): string => {
    try {
        const storedCookies = fs.readFileSync("./src/config/cookies.json", "utf-8")

        const parsedCookies = JSON.parse(storedCookies)
        const cookies = parsedCookies.cookies

        return cookies
    } catch (e){
        console.log(e)
        return "Error"
    }
}