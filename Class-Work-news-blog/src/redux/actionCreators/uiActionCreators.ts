import { SET_THEME, SET_POPUP } from '../actionTypes';
import { THEMES } from '../../types';

const setTheme = (theme: THEMES) => ({
  type: SET_THEME,
  theme,
});

const setBurgerPopup = (popup: boolean) => ({
  type: SET_POPUP,
  popup,
});

export { setTheme, setBurgerPopup };