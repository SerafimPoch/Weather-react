import { GET_WEATHER_DATA_SUCCESS } from "../actions/actionTypes";

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_WEATHER_DATA_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
