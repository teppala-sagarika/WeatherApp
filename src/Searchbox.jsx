import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';

export default function Searchbox(){
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=import.meta.env.VITE_API_KEY;
    let generateWeatherData=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempmax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    }
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        generateWeatherData();
    }
    return (<>
    <div className="searchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br/><br/>
            <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>
    </>);
}