import { weatherApi } from "../../api/";
import {
  GET_WEATHER_DATA_START,
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAILURE
} from "./actionTypes";

const getWeatherDataStart = () => ({ type: GET_WEATHER_DATA_START });

const getWeatherDataSuccess = data => ({
  type: GET_WEATHER_DATA_SUCCESS,
  payload: data
});

const getWeatherDataFailure = error => ({
  type: GET_WEATHER_DATA_FAILURE,
  payload: error
});

export const getWeatherData = city => async dispatch => {
  dispatch(getWeatherDataStart());
  return await weatherApi(city)
    .then(data => dispatch(getWeatherDataSuccess(data)))
    .catch(error => dispatch(getWeatherDataFailure(error)));
};
