import { weatherData } from "../../assets/support";
import { GET_WEATHER_DATA_SUCCESS } from "../actions/actionTypes";

const init = {
  city: "",
  humidity: "",
  days: {
    1: { data: "", icon: "", temp: "" },
    2: { data: "", icon: "", temp: "" },
    3: { data: "", icon: "", temp: "" },
    4: { data: "", icon: "", temp: "" },
    5: { data: "", icon: "", temp: "" },
    6: { data: "", icon: "", temp: "" }
  }
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_DATA_SUCCESS:
      const store = weatherData(payload);
      return Object.assign({}, state, store);
    default:
      return state;
  }
};
