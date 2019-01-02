const options = { weekday: "long", day: "numeric" };

export const weatherData = payload => ({
  city: payload.city.name,
  humidity: payload.list[0].main.humidity + "%",
  days: {
    1: {
      data: new Date(payload.list[0].dt_txt).toLocaleString("ru", options),
      icon: payload.list[0].weather[0].id,
      temp: Math.round(payload.list[0].main.temp - 273.15)
    },
    2: {
      data: new Date(payload.list[5].dt_txt).toLocaleString("ru", options),
      icon: payload.list[5].weather[0].id,
      temp: Math.round(payload.list[5].main.temp - 273.15)
    },
    3: {
      data: new Date(payload.list[13].dt_txt).toLocaleString("ru", options),
      icon: payload.list[13].weather[0].id,
      temp: Math.round(payload.list[13].main.temp - 273.15)
    },
    4: {
      data: new Date(payload.list[21].dt_txt).toLocaleString("ru", options),
      icon: payload.list[21].weather[0].id,
      temp: Math.round(payload.list[21].main.temp - 273.15)
    },
    5: {
      data: new Date(payload.list[29].dt_txt).toLocaleString("ru", options),
      icon: payload.list[29].weather[0].id,
      temp: Math.round(payload.list[29].main.temp - 273.15)
    },
    6: {
      data: new Date(payload.list[37].dt_txt).toLocaleString("ru", options),
      icon: payload.list[37].weather[0].id,
      temp: Math.round(payload.list[37].main.temp - 273.15)
    }
  }
});
