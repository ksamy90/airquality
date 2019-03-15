import React from 'react';
import Weather from './SearchWeather';
import apijson from '../data.json';

class App extends React.Component {
    state = {
        apiData: '',
        aqi: '',
        cigg: ''
    }
    onSearchSubmit = (data1) => {
        apijson.map((data2) => {
            if (data1 === data2.name) {
                this.setState(() => ({
                    apiData: data2.name,
                    aqi: data2.aqi,
                    cigg: data2.cigg
                }));
            }
        });
    }
    render() {
        return (
            <div className="main ui container">
                <Weather 
                    onsubmit={this.onSearchSubmit}
                />
                <h2>City: {this.state.apiData}</h2>
                <h3>Air Smog: {this.state.aqi}</h3>
                <h3>Cigarette pollution: {this.state.cigg}</h3>
            </div>
        );
    }
};

export default App;
