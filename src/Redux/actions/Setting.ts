import { GET_SETTINGS } from "../types";

export const settings_r = (settingsData: object) => async (dispatch: any) => {
  if (settingsData) {
    dispatch({
      type: GET_SETTINGS,
      payload: settingsData,
    });
  }
};
