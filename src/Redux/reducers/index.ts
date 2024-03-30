import { combineReducers } from "redux";
import Settings from "./Settings";

const reducers = combineReducers({
  settings: Settings,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
