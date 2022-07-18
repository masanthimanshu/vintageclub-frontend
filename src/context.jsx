import { ThemeProvider } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import { theme } from "./theme";
import Router from "./router";

const Context = createContext({});
const server = "http://localhost:5000";

export default function ContextProvider() {
  const [auth, setAuth] = useState(false);

  class Update {
    constructor() {
      this.updateAuth = () => setAuth(!auth);
    }
  }

  useEffect(() => {
    window.onbeforeunload = () => {
      return "";
    };
  }, []);

  return (
    <Context.Provider value={{ auth, Update }}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Context.Provider>
  );
}

export function UpdateContext() {
  const { Update } = useContext(Context);
  const Updater = new Update();

  return Updater;
}

export function ReadContext() {
  const { auth } = useContext(Context);

  const value = { auth, server };

  return value;
}
