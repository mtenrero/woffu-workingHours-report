export function calculateDuration(dayDates) {
    let elapsed = 0
    let i = 0
    
    while(i < dayDates.length) {
        elapsed += dayDates[i] > dayDates[i+1] ? dayDates[i] - dayDates[i+1] : dayDates[i+1] - dayDates[i];
        //console.log(elapsed)
        i = i + 2
    }

    //console.log(elapsed)
    return elapsed
}

export function msToHours(ms) {
  let sign = "+"
  if (ms < 0) {
    ms = Math.abs(ms)
    sign = "-"
  }
  var hours = ms / (1000*60*60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;
    return sign + " " + h + "h " + m + "min"
}

export function calculateDayDiff(day, workingHours) {
    let expectedWorkingHours = {
        1: 30600000,
        2: 30600000,
        3: 30600000,
        4: 30600000,
        5: 25200000,
        6: 0,
        7: 0
    }
    let expectedWorkingTime = expectedWorkingHours[day.getDay()]

    return workingHours - expectedWorkingTime
}