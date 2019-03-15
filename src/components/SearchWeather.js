import React from 'react';
import apijson from '../data.json';

class Weather extends React.Component {
    state = {
        city: 'Delhi',
    }
    onInputChange1 = (e) => {
        const inputData1 = e.target.value;
        this.setState(() => ({ city: inputData1 }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        const city = this.state.city;
        this.props.onsubmit(city);
    };
    render() {
        return (
            <div className="ui segment">
                <h2>Input city to get air quality</h2>
                <p>Access air quality from the following cities:</p>
                <ul>
                    {
                        apijson.map((city) => (
                            <li key={city.name}>{city.name}</li>
                        ))
                    }
                </ul>
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>City</label>
                        <input type="text" name="search1" onChange={this.onInputChange1} value={this.state.city} required />
                        <button className="ui grey basic button">Access Air Quality</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Weather;
