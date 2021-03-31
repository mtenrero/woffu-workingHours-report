import { calculateDayDiff, calculateDuration, msToHours } from './analyzer.js'

export function getTimes(data) {
    let days = data["Diaries"]
    var total_diff = 0
    for (let i in days) {
        if (days[i]['Name'] == "Madrid 100%") {
            let day = new Date(days[i]['Date']).getDate()
            let month = new Date(days[i]['Date']).getMonth() +1

            let dayDates = genDayDates(days[i])
            let workingTimeMs = calculateDuration(dayDates)
            let workingTimeHr = msToHours(workingTimeMs)

            let diff = calculateDayDiff(new Date(days[i]['Date']), workingTimeMs)
            if (! isNaN(diff)) {
                total_diff += diff
            }
            console.log(`${day}/${month} -> ${workingTimeHr}  |  [${msToHours(diff)}]`)
        }
    }

    console.log(`Total Diff: ${msToHours(total_diff)}`)
}

function genDayDates(dayObj) {
    let dates = []
    let breaks =  dayObj['TrueBreaks']
    if (breaks) {
        let timeBreaks = breaks.split(/[• ]/)

        for (let breakIndex in timeBreaks) {
            let timeString = dayObj['Date'].replace('T00:00', `T${timeBreaks[breakIndex]}`)
            //console.log(timeString)
            let dateTime = new Date(timeString)
            dates.push(dateTime)
        }
    }
    //console.log(dates)
    return dates
}
