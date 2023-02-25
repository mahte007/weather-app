import { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import Error from "./components/Error";


//5780d186a5ff17ade8694ed351c9631d
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function App(){

    const [temp, setTemp] = useState(0);
    const [weather, setWeather] = useState("");
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [image, setImage] = useState("weather-app")
    const [firstUse, setFirstUse] = useState(true);
    const [error, setError] = useState();


    let onSubmitTest = (e) => {

        const location = document.getElementById('location');

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location.value + '&units=metric&appid=5780d186a5ff17ade8694ed351c9631d')
        .then((res) => res.json())
        .then((data) => {
            if(data.cod === '404'){
                setError(data.cod);
            }else{
                setTemp(data.main.temp);
                setWeather(data.weather[0].main);
                setHumidity(data.main.humidity);
                setWind(Math.floor(data.wind.speed * 3.6));
                setImage(data.weather[0].main);
                setFirstUse(false);
                setError(data.cod)
            }
        }).catch((err) => {
            console.log("Unexpected error: " + err.message);
        })
        e.preventDefault();
    }

    if(error === '404'){
        return(
            <div className="main-container">
                <h1><i className="fa-solid fa-location-dot"></i>  Weather App</h1>
                <form onSubmit={onSubmitTest}>
                    <SearchBar />
                </form>
                <Error />
            </div>
        )
    }else{
    return(
    <div className="main-container">
        <h1><i className="fa-solid fa-location-dot"></i>  Weather App</h1>
        <form onSubmit={onSubmitTest}>
            <SearchBar />
        </form>
        <WeatherDetails weather={weather} temp={temp} humidity={humidity} wind={wind} image={image} class={firstUse ? "" : ".active"} />
    </div>
    )}
}