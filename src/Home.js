import { useEffect, useState } from 'react'
import WeatherData from './WeatherData'

const Home = () => {
    
    const [data, setData] = useState(null);
    ///use props.loca instead of loca;
    //const loca = props.loca;

    const [loca, setLoca] = useState('New York');
    
    const searchClickHandler = (text) => {
        // you can use search bar text from child component
        setLoca(text);
    }


    // const handleSubmit = (e) => {
    //     setLoca(e);
    // };
    
    useEffect(() => {
        const apiKey = '0f976a350c52b32cd8a0c9b854538ebb';
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
    })

    
    return ( 
        <div className="home">
            { data && <WeatherData datas={data} loca={loca} clickFromChild={(text) => searchClickHandler(text)} setLoca={setLoca} ></WeatherData> } 
        </div>
     );
}
 
export default Home;