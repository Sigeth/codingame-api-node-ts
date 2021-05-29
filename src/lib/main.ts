const fs = require("fs")

/** @internal */
export const urls = {
    codingamer: "https://www.codingame.com/services/CodinGamer/",
    puzzle: "https://www.codingame.com/services/Puzzle/"
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