let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')
let img = document.querySelector('img')
let weather_card = document.querySelector('#weather_card')
let form = document.querySelector('form')
let input = document.querySelector('input')


const fetchWeather = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=a194d500b3a649159cd75339260307&q=${input.value}&aqi=no`
        );
        const data = await response.json();
        console.log(data);

        h1.innerText = data.current.temp_c + "c"
        h2.innerText = data.location.name
        img.src = "https:" + data.current.condition.icon;
        // img.setAttribute('src' , data.current.condition.icon)
        p.innerText = data.current.condition.text
        weather_card.className = "p-4 rounded-md border border-black-100 border-b-3 "
    } catch (error) {
        window.alert("Please Enter Valid City Name")
    
    }



    form.reset()
}


form.addEventListener("submit", fetchWeather)
// fetchWeather();