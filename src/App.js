import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

import './App.css';


const API_KEY = 'd1d9caae121905404d5d1b916e2f5f97';
class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    img: undefined,
    weather: undefined,
    error: undefined
  }

  gettingWeather = async(e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    
    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      let degree = Math.round(data.main.temp);
      let icon = data.weather[0]['icon'];
      let img = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      this.setState({
        temp: degree,
        city: data.name,
        country: data.sys.country,
        img: img,
        weather: data.weather[0]['main'],
        error: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        img: undefined,
        weather: undefined,
        error: "Введите название города"
      })
    }
  }

  

  render() {
    return (
      <div className="weather-wrap">
        <div className="weather-block">
          <div className="weather-block__left"> 
            <Info />
          </div>
          <div className="weather-block__right">
            <Form weatherMethod={this.gettingWeather}/>
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              img={this.state.img}
              weather={this.state.weather}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
