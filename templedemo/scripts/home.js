async function testing() {
    const data = "https://starcore2.github.io/wdd230/templedemo/json/temple.json"
    const request = new Request(data);
    const response = await fetch(request);
    const temple = await response.json();
    buildCards(temple);
    //@35.5918266,-97.7288869
    const weatherdata = "https://api.openweathermap.org/data/2.5/onecall?lat=35.5918266&lon=-97.7288869&appid=94e4cccba67a8c8afae7df75be66a7e7&units=imperial"
    const newRequest= new Request(weatherdata);
    const newResponse = await fetch(newRequest);
    const weather = await newResponse.json();
    buildWeatherCard(weather)

}
function buildWeatherCard(weatherCard)
{
/**<div id="weather">
            <h3 id="Location">Unknown</h3>
            <p id="temp">Tempature: <a id="tempSelect">N/A</a></p>
            <p id="disc">Discription of condition: <a id="discSelect">N/A</a></p>
            <p id="humi">Humidity: <a id='humiSelect'>N/A</a></p>
        </div>
    </main> */
    document.querySelector("#Location").textContent = "Oklahoma City Temple";
    document.querySelector("#tempSelect").textContent = weatherCard.current.temp;
    document.querySelector("#discSelect").textContent = weatherCard.current.feels_like;
    document.querySelector("#humiSelect").textContent = weatherCard.current.humidity;

}   
function buildCards(templeCard) {
    let simple = templeCard.temple
    const ok = simple[0]
        
        
        //"#templeOfChoice"
    
        //  "templeName"
    document.querySelector("#templeName").textContent =ok.name
        //"#templeIMG"
    document.querySelector("#templeIMG").src=ok.img    
        //"located">
    document.querySelector("#located").textContent=ok.adress
        //"contact">
    document.querySelector("#contact").textContent=ok.phone

    
    }
testing();