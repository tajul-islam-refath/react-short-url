import { createContext, useReducer } from "react";
import { reducer } from "./UrlReducer";
import { URLINTERFACE } from "../model/URLInterface";

export const Context = createContext({});

const initialState: URLINTERFACE[] = [];

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
