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
    this.CelcConvert = this.CelcConvert.bind(this);
    this.FarenConvert = this.FarenConvert.bind(this);
  }

  CelcConvert() {
    this.setState({
      checker: true
    });
  }

  FarenConvert() {
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
      dropdown = <p>{Celc(temp)} &ordm;C</p>;
    } else {
      dropdown = <p>{Faren(temp)} &ordm;F</p>;
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
                <button className="celcium" onClick={this.CelcConvert}>
                  C
                </button>
                <button className="farenheit" onClick={this.FarenConvert}>
                  F
                </button>
              </div>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                className="image"
                alt=""
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
