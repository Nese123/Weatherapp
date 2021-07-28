import axios from "axios";
import { useEffect, useState } from "react";
import CityInput from "./components/CityInput";
import List from "./components/List";
import Weather from "./components/Weather";

const App = () => {

  const apikey = process.env.REACT_APP_APIKEY
  console.log(apikey)
  const [coData, setCoData] = useState({})

  const [input, setInput] = useState('')

  const [forecast, setForecast] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Oulu,finland&APPID=${apikey}`)
      .then(response => console.log(response.data.main.temp - 273.15) || setCoData(response.data))
  }, [apikey])

  const getForecast = () => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?q=${coData.name}&appid=${apikey}`)
        .then(response => console.log(response.data) || setForecast(response.data))
        .catch(error => console.log('Virheellinen kaupunki'))
}


  const inputSearch = () => {
    console.log(input)
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${input},finland&APPID=${apikey}`)
      .then(response => console.log(response.data) || setCoData(response.data))
      getForecast()
  }

  const cityClick = (e) => {
    const ci = e.target.getAttribute('data-name')
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ci},finland&APPID=${apikey}`)
      .then(response => console.log(response.data) || setCoData(response.data))
      getForecast()
  }

  return (
    <div>
      <CityInput setInput={setInput} input={input} inputSearch={inputSearch} />
      <List clickHandler={cityClick} />
      <Weather wData={coData} forecast={forecast}/>
    </div>
  )
}

export default App;
