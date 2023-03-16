export default function WeatherDetails(props){

    const IMG = (imgName) => {
        return require('../images/' + imgName);
    }

    const location = document.getElementById('location');

    return(
        <div className={"weather-details-container" + props.class}>
        <h1 className="city-name">{location.value}</h1>
            <div className="temperature-container">
                <img src={IMG(props.image.toLowerCase() + '.png')} className="weather-image" alt={props.image} />
                <div className="temperature">
                    <h2>{props.weather}</h2>
                    <h2>{props.temp} C°</h2>
                </div>
            </div>

            <div className="weather-details">
                <p>Humidity <i className="fa-solid fa-water"></i></p><br />
                <p>Wind <i className="fa-solid fa-wind"></i></p>
            </div>

            <div className="weather-details">
                <p>{props.humidity}%</p>
                <p>{props.wind}Km/h</p>
            </div>
        </div>
    )
}