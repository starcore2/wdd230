let airtemp = 33
let windspeed = 2503
let windChill = 0
const math = Math
const chi = document.querySelector("#chill")
const Tempature = document.querySelector("#temp")
const SPPPPPED = document.querySelector('#speed')
function cacluateWindChill(air, speed)
{
    if(air<=50 && speed >= 3){
        return (35.74 + 0.6215*air - 35.75 *(math.pow(speed,0.16))+0.4275*air*(math.pow(speed,0.16)))
    }
    else{
        return "N/A"
    }

}
windChill = cacluateWindChill(airtemp, windspeed);
chi.textContent = windChill
Tempature.textContent = airtemp
SPPPPPED.textContent = windspeed