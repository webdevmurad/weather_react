import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && 
                    <div>
                        <p>Местоположение: {this.props.city} {this.props.country}</p>
                        <p>Температура: {this.props.temp} &deg;C</p>
                        <img alt='Weather' src={this.props.img}/>
                        <p>{this.props.weather}</p>
                    </div>
                }
            </div>
        )
    }
}

export default Weather;