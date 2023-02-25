export default function WeatherDetails(props){

    const IMG = (imgName) => {
        return require('../images/' + imgName);
    }



    return(
        <div className={"weather-details-container" + props.class}>
            <div className="temperature-container">
                <img src={IMG(props.image.toLowerCase() + '.png')} className="weather-image" />
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