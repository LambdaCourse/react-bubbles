import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route path="/bubble-page" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
