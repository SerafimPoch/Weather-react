import React, { Component } from "react";
import { buildRequestUrl, getCurrentLocation, extractPosition } from "./Geo";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temp: 0,
      icon: null
    };
  }

  async componentDidMount() {
    if (navigator.geolocation) {
      const position = await getCurrentLocation();
      const { lat, lon } = extractPosition(position);
      const data = await fetch(buildRequestUrl(lat, lon)).then(resp =>
        resp.json()
      );
      console.log(data);
      this.setState({
        city: data.city.name,
        temp: data.list[0].main.temp,
        icon: data.list[0].weather[0].icon
      });
    } else {
      alert("No internet connection");
    }
  }

  render() {
    const icon = this.state.icon;
    console.log(icon);
    return (
      <div>
        <header>
          <div className="headerContainer">
            <p className="headerText">Forest Weather</p>
          </div>
        </header>

        <main>
          <div className="mainContainer">
            <div className="location">{this.state.city}</div>
            <div className="tempConvertContainer">
              <div className="temperature">{this.state.temp}</div>
              <div>
                <button className="celcium">C</button>
                <button className="farenheit">F</button>
              </div>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                className="image"
                alt="weather-image"
              />
            </div>
          </div>
        </main>
        <footer>
          <div className="footerContainer">
            <div>
              <figure>
                <a href="https://github.com/SerafimPoch">
                  <img
                    src="https://octodex.github.com/images/dojocat.jpg"
                    alt="my github account"
                    className="github"
                  />
                </a>
                <figcaption>My GitHub</figcaption>
              </figure>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Weather;
