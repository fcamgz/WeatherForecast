import React from 'react'

export default function WeatherCard({data}) {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-8">
                    <div className="card">
                        <div className="card-body p-2">
                            <h4 className='text-secondary'>{new Date(data.dt*1000).getHours()+ ':' + new Date(data.dt*1000).getMinutes()}</h4>
                                <div className="d-flex">
                                    <h2 className="flex-grow-1">{data.name}</h2>
                                    <h6 className='text-secondary'>{data.sys.country}</h6>
                                    </div>
                                    <h5 className='mt-3 text-info'>{data.weather[0].main}</h5>
                                    <div className="d-flex flex-column text-center mb-2">
                                    {parseInt(data.main.temp) > 15 ?
                                        <h6 className="display-4 mb-2 font-weight-bold text-danger"> {data.main.temp}°C </h6>
                                        : <h6 className="display-4 mb-2 font-weight-bold text-primary"> {data.main.temp}°C </h6>
                                    }
                                    <div>
                                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width="100px" alt='Weather logo'/>
                                    </div>
                                </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h6 className='text-warning'>High: {data.main.temp_max}</h6>
                                    <h6 className='text-primary'>Low: {data.main.temp_min}</h6>
                                    <h6 className='text-success'>Feels like: {data.main.feels_like}</h6>
                                    <h6 className='text-info'>Humidity: {data.main.humidity}%</h6>
                                    <h6 className='text-secondary'>Wind Speed: {data.wind.speed} m/s</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
