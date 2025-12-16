import Searchbox from'./Searchbox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState(
       {
        city: "Wonderland",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity:47,
        weather: "haze",
       }
    );

    let updateWeatherInfo=(result)=>{
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign:"center"}}>
        <h1><u>WEATHER APP</u></h1>
        <p><i>“Weather, the way you need it”</i></p>
        <Searchbox updateInfo={updateWeatherInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}