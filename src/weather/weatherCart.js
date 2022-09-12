import React, { useEffect, useState } from 'react'

function WeatherCart({ tempInfo }) {
    const { temp, humidity, pressure, weatherMoad, name, speed, country, sunset } = tempInfo
    const [weatherState, setWeatherState] = useState("")
    // converting second into time
    let sec = sunset
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    useEffect(() => {
        if (weatherMoad) {
            switch (weatherMoad) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy")
                    break
                case "Haze":
                    setWeatherState("wi-fog")
                    break
                case "Clear":
                    setWeatherState("wi-day-sunny")
                    break
                    case "Mist":
                        setWeatherState("wi-dust")
                        break
                default:
                    setWeatherState("wi-day-sunny")

            }
        }

    }, [weatherMoad])
    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>
                            {temp}&deg;c
                        </span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weatherMoad}</div>
                        <div className='place'>{name},{country}</div>

                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>
                {/* our 4 column section */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-sunset '}></i></p>
                            <p className='extra-info-leftside'>
                                {timeStr}<br />
                                sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-humidity '}></i></p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                humidity
                            </p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-rain'}></i></p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className={'wi wi-strong-wind'}></i></p>
                            <p className='extra-info-leftside'>
                                {speed} <br />
                                speed
                            </p>
                        </div>


                    </div>
                </div>
            </article>

        </>)
}

export default WeatherCart