export default function WeatherDetails(props){

    const IMG = (imgName) => {
        return require('../images/' + imgName);
    }

    return(
        <div className={"weather-details-container" + props.class}>
            <div className="error-container">
               <h2>Oops, Location not Found!</h2>
                <img src={IMG('404-error.png')} className="error-image" alt="Error" />
            </div>
        </div>
    )
}