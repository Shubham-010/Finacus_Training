import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { colorMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { colorMode: !state.colorMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
  );
};