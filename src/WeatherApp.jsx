import Searchbox from'./Searchbox';
import InfoBox from './InfoBox';

export default function WeatherApp(){
    return (
        <div style={{textAlign:"center"}}>
        <h1><u>WEATHER APP</u></h1>
        <p><i>“Weather, the way you need it”</i></p>
        <Searchbox/>
        <InfoBox/>
        </div>
    );
}