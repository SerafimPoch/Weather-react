import { GET_WEATHER_DATA_SUCCESS } from "../actions/actionTypes";

const init = {
  city: "",
  humidity: "",
  days: {
    mon: { data: "", icon: "", temp: "" },
    tue: { data: "", icon: "", temp: "" },
    wed: { data: "", icon: "", temp: "" },
    thu: { data: "", icon: "", temp: "" },
    fri: { data: "", icon: "", temp: "" },
    sat: { data: "", icon: "", temp: "" },
    sun: { data: "", icon: "", temp: "" }
  }
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_DATA_SUCCESS:
      const store = {
        city: payload.city.name,
        humidity: payload.list[0].main.humidity + "%"
      };
      return Object.assign({}, state, store);
    default:
      return state;
  }
};
