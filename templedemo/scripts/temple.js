async function testing(){
    const data = "../json/temple.json"
    const request = new Request(data);
    const response = await fetch(request);
    const temple = await response.json();

}
function buildCards()
{

}
testing()