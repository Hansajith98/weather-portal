import { Link } from 'react-router-dom'
import { useState,useContext} from 'react'
// import { ThemeContext } from './ThemeContext';

const WeatherData = ({datas,loca,clickFromChild}) => {
    
    const FarenheitToCelcius = (k) => {
        var fc = (k - 32) * 5 / 9;
        return fc.toFixed(2);
    };

    const [cel,setCel] = useState(true);
    const [far, setFar] = useState(false);
    const [style, setStyle] = useState({style1 : null,style2: 'green'});

    // const {isLightTheme, dark, light} = useContext(ThemeContext);
    // const theme = isLightTheme ? light: dark;

    const [text, setText] = useState('');
    //const [style2, setStyle2] = useState(null);

    const handleClick1 = () => {
        setCel(true);
        setFar(false);
        setStyle({ style1 : 'green', style2: null });
        //setStyle2(null);
    };
    const handleClick2 = () => {
        setFar(true);
        setCel(false);
        setStyle({ style1 : null, style2: 'green' });
        //setStyle2('green');
    };
 
    return ( 
        <div className="card border border-dark mb-3 mx-auto" >
            {loca}
            <div className="links d-block">
                <div className="col-auto">
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setText(e.target.value)} 
                    placeholder='Enter the location'
                />
                </div>
                <button className="btn btn-primary mt-2" onClick={() => clickFromChild(text)} >Search</button>              
            </div>

            <div className="card-header"> {datas.sys.country} - {datas.name}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Temperature - 
                <span>
                    {cel && <div>{datas.main.temp}</div> } {far && <div>{FarenheitToCelcius(datas.main.temp)}</div> }
                    <Link className="tempo" onClick={handleClick1} style={{ color:style.style1 }} >&#x2103;
                    </Link>
                    |
                    <Link className="tempo" onClick={handleClick2} style={{ color:style.style2 }} >&#x2109;</Link>
                </span>
                 </h5>
                <h6> Longitude : {datas.coord.lon}  | Latitude : {datas.coord.lat} </h6>
                <p className="card-text">
                    { datas.weather.map((data) => (
                        <div className="blog-preview" key={data.id}>
                            <h5> Main - {data.main} </h5>
                            <h5> Description - {data.description} </h5>
                        </div>
                    ) ) }                   
                    Humidity - {datas.main.humidity} <br/>
                    Wind Speed - {datas.wind.speed} <br/>
                    Time Zone : {datas.timezone}
                </p>
            </div>
        </div>
     );
}
 
export default WeatherData;