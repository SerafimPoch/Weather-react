export const buildRequestUrl = (lat, lon) => {
  const key = "b8a59b301233a16e12819fc3b17ebc57";
  return `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${key}`;
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }).catch(e => new Error(e));
};

export const extractPosition = position => ({
  lat: position.coords.latitude,
  lon: position.coords.longitude
});
