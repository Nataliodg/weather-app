import { useEffect, useState } from 'react';
import './App.css';
import Icons from './components/Icons';

function App() {
  const [search, setSearch] = useState('roma')
  const [values, setValues] = useState('')
  const [icon, setIcon] = useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`

  const getData = async () => {
    await fetch(URL)
      .then(response => { return response.json() })
      .then(data => {
        console.log(data)

        if (data.cod >= 400) {
          setValues(false)
        } else {
          setIcon(data.weather[0].icon)
          setValues(data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
    }
  }
  useEffect(() => {
    getData()
  }, [search]) // eslint-disable-line react-hooks/exhaustive-deps

  //const ubi = `http://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <>
      <div className="container">
        <h2>React Weather App</h2>
        <div className='row'>
          <input
            onKeyDown={handleSearch}
            type="text"
            autoFocus
            placeholder='Search'
          />
        </div>
      </div>

      <div className='card'>
        {(values) ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;C</p>
            <p className="humedad">Humedad: {values.main.humidity}%</p>
            <img className='icon' src={Icons(icon)} alt="icon-weather" />
            <div className="description"><p>{values.weather[0].description}</p></div>
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;C min  |  {values.main.temp_max.toFixed(0)}&deg;C max</p>
            </div>
          </div>
        ) : (
          <h1>{"City not found"}</h1>
        )}

      </div>

    </>
  );
}

export default App;