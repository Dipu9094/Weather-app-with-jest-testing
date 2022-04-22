import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Country from "./Compoents/Country";
import Home from "./Compoents/Home";


function App() {
  return (
    <div data-testid="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"  > <Home/> </Route>
          <Route exact path="/country/:name" > <Country/> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
