import { useEffect, useState } from 'react'
import WeatherData from './WeatherData'

const Home = () => {
    
    const [data, setData] = useState(null);

    const [loca, setLoca] = useState('New York');
    
    const searchClickHandler = (text) => {
        setLoca(text);
    }

    useEffect(() => {
        // const apiKey = apikey;
        const apiKey =process.env.REACT_APP_API_KEY;
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${loca}&units=imperial&appid=${apiKey}`;

        fetch(url)
        .then(res => {
            //console.log(res.status);
            if(!res.status){
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then(data => {
            console.log(data.name);
            setData(data);
        });
    });

    
    return ( 
        <div className="home">
            { data && <WeatherData datas={data} loca={loca} clickFromChild={(text) => searchClickHandler(text)} setLoca={setLoca} ></WeatherData> } 
        </div>
     );
}
 
export default Home;