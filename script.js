function DigitalClock()
{
    let d = new Date()
    let date = d.getDate()

    let Hours = d.getHours()
    let Min = d.getMinutes()
    let Sec = d.getSeconds()

    let curTime = document.getElementsByClassName('Time')
    curTime[0].innerText = Hours
    curTime[1].innerText = Min
    curTime[2].innerText = Sec

    let Dt = d.getDate()
    let Month = d.getMonth()
    let Year = d.getFullYear()
    let curDate = document.getElementsByClassName('Date1')
    curDate[0].innerText = Dt
    curDate[1].innerText = Month
    curDate[2].innerText = Year

    let Dy = d.getDay()
    let curDay = document.getElementsByClassName('Day1')
    curDay[0].innerText = Dy
}
 







