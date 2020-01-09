import React from 'react';

import '../componentsStyle/weather.css';

const Weather = props => {
    return (
        <div className='weather-info'>
            {props.city && 
                <div>
                    <p>Местоположение: {props.city} {props.country}</p>
                    <p>Температура: {props.temp} &deg;C</p>
                    <img alt='Weather' src={props.img}/>
                    <p>{props.weather}</p>
                </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default Weather;