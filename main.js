document.getElementById('theButton').addEventListener('click', getFetch)
// document.getElementById('theButton').addEventListener('keydown', getFetch)
//random math is...
//let Math.floor((Math.random()*6)+1)

function getFetch(){
    const userInput = document.getElementById('userInfo').value
    console.log(userInput)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=e74aa8564c298e066bbeaa86363aa11a` //added backticks `` to WHOLE thing to make template literal work -- REMOVE single quotes around everything and backticks COVER IT ALL  --  OLD WAY was 'https://asdf'+userInput+'asdfapi' CAN'T wrap the whole thing in single quotes this way

    // if (getFetch.keyCode === 13) {
    // // Cancel the default action, if needed
    // getFetch.preventDefault();
    // // Trigger the button element with a click
    // document.getElementById("theButton").click();

fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data)
    let cityNameValue = data.name
    let temp = data.main.temp+'°F'
    let descriptionValue = data.weather[0].description // <--- when dealing with arrays in a Object, do ** name[0].asdfasdf.adsfaf ** as syntax

    cityName.innerText = cityNameValue
    temperature.innerText = temp
    description.innerText = descriptionValue
    })


    // .then(data => console.log(data)) <---- this was to test / check to see what's in the API after being parsed into JSON
    // .then(data => {
    //     let nameValue = data['name'])
    // }
    .catch(err => alert(`Wrong City Name! ${err}`));
}