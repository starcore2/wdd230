
async function testing() {
    const data = "https://starcore2.github.io/wdd230/templedemo/json/temple.json"
    const request = new Request(data);
    const response = await fetch(request);
    const temple = await response.json();
    buildCards(temple);

}
function buildCards(templeCard) {
    let simple = templeCard.temple
    for (let index = 0; index < simple.length; index++) {
        const target = document.querySelector("#Temples")
        const overkill = simple[index];
        let card = document.createElement('div');
        let name = overkill.name;
        let nameX = document.createElement('h2');
        nameX.textContent ="Adress: "+name;
        let adress = overkill.adress;
        let adressx = document.createElement('p');
        adressx.textContent = "Address: "+adress;
        let phone = overkill.phone;
        let phonex = document.createElement('p');
        phonex.textContent = "Phone: "+phone;
        let history = overkill.history;
        let historyx = document.createElement('p');
        historyx.textContent = "History: ";
        splitHistory = history.split('\n')
        for (const iterator of splitHistory) {
            const baby = document.createElement("li")
            baby.textContent=iterator
            historyx.append(baby)     
        }
        let img = overkill.img;
        let imgx = document.createElement('img');
        imgx.src = img;
        imgx.alt = "A photo of " + name;
        let templeclose = overkill.templeClosureSchedule;
        let templeCloseX = document.createElement("ul");
        const templearray = templeclose.split('\n')
        const note = document.createElement("h3");
        note.textContent = "Days Temple are closed"
        templeCloseX.append(note)
        for (const iterator of templearray) {
            const baby = document.createElement("li")
            baby.textContent=iterator
            templeCloseX.append(baby)
            
        }
        card.append(nameX, imgx, historyx, phonex, adressx, templeCloseX);
        target.appendChild(card);

    }
}
testing();