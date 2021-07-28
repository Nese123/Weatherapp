import Hour3Forecast from "./Hour3Forecast"

const Forecast = ({ forecast }) => {
    if (forecast.message === undefined) {
        return (
            <div>Ladataan ennustetta</div>
        )
    }
    const hourly = forecast.list.map(h => <Hour3Forecast key={h.dt_txt} fPoint={h}/>)
    const style = {
        width: '500px',
        height: '300px',
        overflowY: 'scroll'
    }
    return (
        <div style={style}>
            {hourly}
        </div>
    )
}

export default Forecast