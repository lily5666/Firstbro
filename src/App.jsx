import React from "react";
import Heading from './Heading';
import Divt from './Divt';
import Pic from './Pic';
import New from './New';
import Fr from './Fr';
import Last from './Last';
import Df from './Df';
import Home from './Home';
import Hell from './Hell';
import Error from './Home';
import Kpw from './Kpw';
import Jppp from './Jppp';
import Newfile from './Newfile';
import Show from './Show';
import Sign from './Sign';
import Mr from './Mr';
import Buy from './Buy';
import Shipping from './Shipping';
import  {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
const App =() =>
{
  return(
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Df" component={Df}/>
        <Route exact path="/hell" component={Hell}/>
        <Route exact path="/Kpw" component={Kpw}/>
        <Route exact path="/Jppp" component={Jppp}/>
        <Route exact path="/New" component={Newfile}/>
        <Route exact path="/About" component={Mr}/>
        <Route exact path="/Show" component={Show}/>
        <Route exact path="/Sign" component={Sign}/>
        <Route exact path="/Buy" component={Buy}/>
        <Route exact path="/Shipping" component={Shipping}/>
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  );
};
export default App;