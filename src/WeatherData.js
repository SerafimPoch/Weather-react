import React, { Component } from "react";
import { buildRequestUrl, getCurrentLocation, extractPosition } from "./Geo";
import { Faren, Celc } from "./Buttons";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temp: true,
      icon: null,
      checker: false
    };
  }

  CelcConvert(e) {
    this.setState({
      checker: true
    });
  }

  FarenConvert(e) {
    this.setState({
      checker: false
    });
  }
  async componentDidMount() {
    if (navigator.geolocation) {
      const position = await getCurrentLocation();
      const { lat, lon } = extractPosition(position);
      const data = await fetch(buildRequestUrl(lat, lon)).then(resp =>
        resp.json()
      );
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
    const temp = this.state.temp;
    const city = this.state.city;
    let dropdown;
    if (this.state.checker) {
      dropdown = Celc(this.state.temp);
    } else {
      dropdown = Faren(this.state.temp);
    }
    return (
      <div>
        <header>
          <div className="headerContainer">
            <p className="headerText">Forest Weather</p>
          </div>
        </header>

        <main>
          <div className="mainContainer">
            <div className="location">{city}</div>
            <div className="tempConvertContainer">
              <div className="temperature">{dropdown}</div>
              <div>
                <button
                  className="celcium"
                  onClick={this.CelcConvert.bind(this)}
                >
                  C
                </button>
                <button
                  className="farenheit"
                  onClick={this.FarenConvert.bind(this)}
                >
                  F
                </button>
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
