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

    fs.writeFile("./src/config/cookies", cookiesStr, function(err: any){
        if (err) {
            return console.log(err)
        }
    })
}

/** @internal */
export const getCookies = (): string => {
    try {
        const cookiesStr = fs.readFileSync("./src/config/cookies", "utf-8")
        console.log(cookiesStr)
        return cookiesStr
    } catch (e){
        console.log(e)
        return "Error"
    }
}