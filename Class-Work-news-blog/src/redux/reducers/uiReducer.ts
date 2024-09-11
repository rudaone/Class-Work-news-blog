import { IUIState, THEMES } from "../../types"
import { SET_THEME, SET_POPUP } from "../actionTypes";

const initialUIState = {
  theme: THEMES.LIGHT,
  popup: false,
};

const uiReducer = (state: IUIState = initialUIState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme };

    case SET_POPUP:
      return { ...state, popup: action.popup };
    default:
      return state;
  }
};

export { uiReducer }