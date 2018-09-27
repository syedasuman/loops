const forecast = [
    {
        day: "monday",
        weather: "lightning"
    },
    {
        day: "tuesday",
        weather: "cloudy"
    },
    {
        day: "wednesday",
        weather: "windy"
    },
    {
        day: "thursday",
        weather: "sunny"
    },
    {
        day: "friday",
        weather: "rain"
    },
    {
        day: "saturday",
        weather: "lightning"
    },
    {
        day: "sunday",
        weather: "fog"
    },
]

function initialize() {
    for (let i = 0; i < forecast.length; i++){
        // document.querySelector(`#${forecast[i].day} img`).src = `images/${forecast[i].weather }.svg`;
        // document.querySelector(`body`).innerHTML = i ++ (`#${forecast[i].day}`)
        document.querySelector("body").innerHTML+=` <section id="monday" class="container">
        <h1 class="text-info">${forecast[i].day}</h1>
        <section id="forecast">
            <img src="images/${forecast[i].weather }.svg" alt="">
        </section>
    </section>`
    }
}



