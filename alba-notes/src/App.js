import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import Login from './routes/login';
import Register from './routes/register';
import Notes from './routes/notes';
import allNotes from './routes/allNotes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
  <Switch>
    <Route path="/" component={Login} exact></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/notes" component={Notes}></Route>
    <Route path="/allNotes" component={allNotes}></Route>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
