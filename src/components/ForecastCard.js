import React from 'react'

export default function ForecastCard({forecast, index}) {
    return (
        <div>
            <div className="col">
                <div className="card">
                    <div className="card-body p-2 m-4">
                        <h2 className='text-warning'>{index === 0 ? 'Today' : new Date(forecast.dt * 1000).toUTCString().split(',')[0]}</h2>
                        {parseInt(forecast.temp.day) > 15 ?
                        <h6 className="display-4 mb-2 font-weight-bold text-danger"> {forecast.temp.day}°C </h6>
                        : <h6 className="display-4 mb-2 font-weight-bold text-primary"> {forecast.temp.day}°C </h6>
                        }
                        <div className="d-flex flex-column text-center mt-4">
                        <h4 className='mt-3 text-info'>{forecast.weather[0].main}</h4>
                        </div>
                        <div className="ml-4">
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} width="100px" alt='Weather logo'/>
                        </div>
                        </div>
                        <h6>Feels like</h6>
                        <p className='text-primary'>{forecast.feels_like.day}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
