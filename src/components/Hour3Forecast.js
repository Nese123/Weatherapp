const Hour3Forecast = ({ fPoint }) => {
    const style = {
        border: '5px solid blue',
        margin: '20px',
        textAlign: 'center'
    }
    return (
        <div style={style}>
            <p>{fPoint.dt_txt}</p>
            <p>Lämpötila: {fPoint.main.temp - 273.15, Math.round (fPoint.main.temp - 273.15)}°C</p>
            <p>Kuvaus: {fPoint.weather[0].description}</p>
        </div>
    )
}

export default Hour3Forecast