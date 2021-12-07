import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import Login from './components-routes/login';
import Register from './components-routes/register';
import Notes from './components-routes/notes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
  <Switch>
    <Route path="/" component={Login} exact></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/notes" component={Notes}></Route>
  </Switch>
  </BrowserRouter>
  );
}

export default App;