import React from "react";
import Home from "./Hoom";
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import About from "./About";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <BrowserRouter basename="/todos">
      <Parcel config={System.import('@study/navbar')}/>
      <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <Switch>
        <Route path={'/home'}>
          <Home />
        </Route>
        <Route path={'/about'}>
          <About />
        </Route>
        <Route path={'/'}>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
