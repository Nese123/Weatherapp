import Forecast from "./Forecast";

const Weather = ({ wData, forecast }) => {
    if (wData.main === undefined) {
        return (
            <div></div>
        )
    }
    
    return (
        <div>
            <h1>Sää {wData.name}</h1>
            <p>lämpötila: {wData.main.temp - 273.15, Math.round(wData.main.temp - 273.15)}°C</p>
            <p>tuntuu kuin: {wData.main.feels_like - 273.15, Math.round(wData.main.feels_like - 273.15)}°C</p>
            <p>tuuli: {wData.wind.speed} m/s</p>
            <Forecast forecast={forecast} />
        </div>
    )
}

export default Weather