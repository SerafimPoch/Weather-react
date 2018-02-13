import React, { Component } from "react";
import { forecastStore } from "./IconStore";
import Weather from "./WeatherData";

class App extends Component {
  render() {
    return (
      <div>
        <Weather store={forecastStore} />
      </div>
    );
  }
}

export default App;
