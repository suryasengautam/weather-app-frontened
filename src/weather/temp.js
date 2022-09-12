import React , {useEffect, useState} from 'react'
import "./style.css"
import WeatherCart from './weatherCart'

function Temp() {
    const [searchValue,setSearchValue] = useState("pune")
    const [tempInfo,setTempInfo] = useState({})
    const getWeatherInfo = async() => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a664a95efd8042e10a23ca9a8d36207c`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            const {temp,humidity,pressure} = data.main;
            const {main : weatherMoad}  = data.weather[0]
            const {name} = data
            const {speed} = data.wind
            const {country,sunset} = data.sys
            const myNewWeatherInfo = {
                temp,humidity,pressure,weatherMoad,name,speed,country,sunset
            }
            // console.log(myNewWeatherInfo);
            setTempInfo(myNewWeatherInfo)
        }
        catch (error){
            console.log(error);

        }
    }
    useEffect(() => {getWeatherInfo()},[])
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="text" placeholder='search..' autoFocus id="search" className='searchTearm' value={searchValue} onChange = {(e) => setSearchValue(e.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>

            </div>
           <WeatherCart tempInfo = {tempInfo}/>
        </>
    )
}

export default Temp