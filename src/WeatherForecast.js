import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ForecastCard from './components/ForecastCard';
import WeatherCard from './components/WeatherCard';

const WeatherForecast = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    
    useEffect(() => {
      generateWeatherData();
      generateForecastData();
      }, [])

    const generateWeatherData = async() => {
      setLoading(true);
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=c796405f3b335986738857de4a056c48&units=metric`)
      .then(response => response.data)
      .then(response => {
        console.log(response)
        setData(response);
        setLoading(false);
      })
      .catch(err => console.log(err));
    }

    const generateForecastData = async() => {
      setLoading(true);
      await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=43.65&lon=-79.34&appid=c796405f3b335986738857de4a056c48&units=metric')
      //api.openweathermap.org/data/2.5/forecast/daily?q=Toronto&cnt=7&appid=73aea1eaf47da7be9662d0a55b5a182a
      .then(response => response.data)
      .then(response => {
        console.log(response)
        setForecastData(response);
        setLoading(false);
      })
      .catch(err => console.log(err));
    }
    return(
      <div>
        <Header/>
          <div className='vh-100 mt-5 d-flex align-items-center'>
            <div className='container'>
              <h1 className='text-secondary'>Weather in Toronto Currently</h1>
              <br/>
              <br/>
              <div>
                {data.length !== 0 ? (
                  <div className="h-100">
                      <div className='row'>
                        <WeatherCard data={data}/>
                      </div>
                    </div>
                  )
                    : (<div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>)
                    }
                    <br/>
                    <br/>
                    <hr/>
                    <h1 className='m-5 text-secondary'>Weekly Weather Forecast For Toronto</h1>
                    <br/>
                    <div className='row'>
                      {forecastData.length !== 0 ? forecastData.daily.map((forecast, index) => (
                        <div className='col-3' key={index}>
                            <ForecastCard forecast={forecast} index={index}/>
                          </div>
                        ))
                        : (<div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>)
                      }
                    </div>
              </div>
              <br/>
              <br/>
              <Footer/>
            </div>
        </div>
      </div>
)}

export default WeatherForecast;