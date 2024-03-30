import { AnyAction } from "redux";
import { GET_SETTINGS } from "../types";

const initialSettings = {
  title: "Github User",
  description: "",
  keywords: "",
  image: "",
  author: "ahmetyesil",
};
const settings = (state = initialSettings, action: AnyAction) => {
  switch (action.type) {
    case GET_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default settings;
