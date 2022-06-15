setInterval(setDate , 1000)

const hourStick = document.getElementById('hour')
const minuteStick = document.getElementById('minute')
const secondStick = document.getElementById('second')

function setDate(){
    const  realDate = new Date();
    const seconds = realDate.getSeconds() / 60; // here taking the seconds
    const minutes = (seconds + realDate.getMinutes()) / 60; // here taking the minutes
    const hours = (minutes + realDate.getHours()) / 12; // here taking the real hour
    

    setRotation(secondStick, seconds);
    setRotation(minuteStick, minutes);
    setRotation(hourStick, hours);


}

function setRotation(element, rotationRatio){
    // let timeTime = document.querySelector('time')
   element.style.setProperty('--rotation', rotationRatio * 360)
//
}

setDate()