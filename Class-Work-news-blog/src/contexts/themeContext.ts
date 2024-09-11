import React from 'react';
import { THEMES } from '../types';

export const ThemeContext  = React.createContext({} as { theme: THEMES, setTheme: Function })

