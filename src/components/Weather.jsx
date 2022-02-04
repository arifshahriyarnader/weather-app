import React, {useState} from 'react';
import axios from "axios";

const Weather = () => {
   const [query,setQuery] = useState('');
   const [cond, setCond] = useState([]);
   const url = `http://api.weatherstack.com/current?access_key=36ba6c0e4b023d6935b57cd651339672&query=${query}`
//axios
const getData = async () =>{
    const result = await axios.get(url)
    setCond([result.data])
    console.log(result.data);
}
    const cityChange =(e) =>{
        setQuery(e.target.value)
    }
   const formSubmit =(e) =>{
        e.preventDefault();
        getData();
   }
   
    return (
        <div className='weatherApp'>
            <form onSubmit={formSubmit}>
                <input type="text" name="name" id="name" placeholder='Enter the City' value={query} onChange={cityChange} />
                <button type="submit">Submit</button>
            </form>
           {cond.map((item,index) => {
               return (
                   <div key={index} className='item'>
                       <div className='place'>
                          <img src={item.current.weather_icons} alt="Weaher Icon"/>
                          <p>{item.location.country}</p>
                          <p>{item.location.region}</p>

                        <div className='condition'>
                            <p><span>Observation Time</span>{item.current.observation_time}</p>
                            <p><span>Temperature:</span>{item.current.temperature}</p>
                            <p>{item.current.weather_descriptions}</p>
                            <p><span>Pressure:</span>{item.current.pressure}</p>
                            <p><span>Wind Degree:</span>{item.current.wind_degree}</p>
                        </div>

                       </div>
                   </div>
                 
               )
           })}
        </div>
    );
};

export default Weather;