import logo from "./logo.svg";
import "./App.css";
import { BrowseRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
