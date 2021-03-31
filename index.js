import {getTimes} from './parse.js'
import {readFileSync} from 'fs'
function main() {
    let file = process.argv[2]
    console.log("Woffu Reporter");
    console.log(`report file: ${file}`)

    let fileData = readFileSync(file)
    let jsonData = JSON.parse(fileData)
    
    getTimes(jsonData)
}

main()