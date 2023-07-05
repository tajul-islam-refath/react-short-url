import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./UrlReducer";
import { URLINTERFACE } from "../model/URLInterface";

export const Context = createContext({});

const initialState: URLINTERFACE[] = localStorage.getItem("shortUrls")
  ? JSON.parse(localStorage.getItem("shortUrls") || "")
  : [];

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   const savedState = localStorage.getItem("shortUrls");
  //   if (savedState) {
  //     dispatch({ type: "SET_STATE", payload: JSON.parse(savedState) });
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("shortUrls", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
