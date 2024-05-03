//  Time zone in Anchorage, AK, USA (GMT-8)
//  Friday, 3 May 2024, 00:30 

//  Time zone in Reykjavík, Iceland (GMT)
//  Friday, 3 May 2024, 08:31 

//  Time zone in Saint Petersburg, Russia (GMT+3)
//  Friday, 3 May 2024, 11:31 

let now = new Date


/*console.log(now)

let birthDate = new Date('1999-02-16')

console.log((now.getTime() / 1000))
console.log((now - birthDate) / (1000 * 60 * 60))


function getDayNumb () {
    const calc = 1000 * 60 * 60 * 24;
    let numbDay = parseInt(now - birthDate);

    console.log((numbDay/calc).toFixed(0))

    let numbDayBegin = parseInt(now.getTime())

    console.log((numbDayBegin/calc).toFixed(0))
}

getDayNumb()
*/



//-----------------------------------------------------------------


/*let futureHour = now.setHours(now.getHours() + 80000)

console.log(now.getHours)
*/





/*function addHours() {
    let h = prompt('How many hours will you add ?')
    now.setTime(now.getTime() + (h*60*60*1000));
    alert(now)
  }


  addHours()
*/


// ----------------------------------------------------------------


let date = document.querySelector('.date')
let hour = document.querySelector('.hour')
const dayNames = ["Dun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["Jan", "Fen", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let nowDay = now.getDay()
let nowMonth = now.getMonth()


function createCalendar() {

    let day = document.createElement('p')
    day.classList.add('day')
    day.textContent = dayNames[nowDay]

    let dateBlock = document.createElement('div')
    dateBlock.classList.add('dateBlock')



    let dateNum = document.createElement('p')
    dateNum.classList.add('num')
    dateNum.textContent = String((now.getDate())).padStart(2, '0')

    let dateMonth = document.createElement('p')
    dateMonth.classList.add('month')
    dateMonth.textContent = monthNames[nowMonth]

    dateBlock.appendChild(dateNum)
    dateBlock.appendChild(dateMonth)

    let year = document.createElement('p')
    year.classList.add('year')
    year.textContent = now.getFullYear()

    
    
    date.appendChild(day)
    date.appendChild(dateBlock)
    date.appendChild(year)    

}




function refreshTime() {

    const time = document.querySelector('#hour')

    const now = new Date()

    const hourNow = String(now.getHours()).padStart(2, '0');
    const minutesNow = String(now.getMinutes()).padStart(2, '0');
    const secondsNow = String(now.getSeconds()).padStart(2, '0');

    const dateTimeString = `${hourNow}:${minutesNow}:`;

    time.setAttribute('data-before',  `${hourNow}:${minutesNow}:`)
    time.setAttribute( 'data-after', `${secondsNow}`)


    time.textContent = dateTimeString
}

createCalendar()


setInterval(refreshTime, 1000)

  