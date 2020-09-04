import { combineReducers } from "redux";

import physicians from "app/reducers/physicians";
import appointments from "app/reducers/appointments";

export default combineReducers({ physicians, appointments });
