import { useState, useEffect } from "react"


//5780d186a5ff17ade8694ed351c9631d
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function App(){

    const IMG = (imgName) => {
        return require('./images/' + imgName);
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=germany&appid=5780d186a5ff17ade8694ed351c9631d')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    })

    return(
    <div className="main-container">
        <h1>Weather App</h1>
        <div className="search-container">
            <div className="search-bar">
                <input type="text" name="location" placeholder="Search" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="cover-image-container">
                <img src={IMG('weather-app.png')} className="cover-image"></img>
            </div>
        </div>
        <div className="weather-details-container">
            <div className="temperature-container">
                <div className="temperature">
                    <h2>Sunny</h2>
                    <h2>22 C°</h2>
                </div>
                <div className="weather-image-container">
                <img src={IMG('sun.png')} className="weather-image" />
                </div>
            </div>
            <div className="weather-details">
                <p>Humidity</p>
                <p>Wind</p>
            </div>
        </div>
    </div>
    )
}