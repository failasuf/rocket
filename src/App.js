import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";

import NotFound from './pages/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/details/:movieId/:movieName" component={SinglePost} />
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={NotFound} ></Route>
      </Switch>
    </Router>
    
  );
}

export default App;