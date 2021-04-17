
import React, {Component} from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import './App.css';


class App extends Component {

  render(){
    return (
      <div>
    <Router>
    <Header />
    
    <Switch>
    <Route path="/searchPage">
          <SearchPage/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    
    
    </ Router>
    </div>
    )
    }
  
  
}

export default App





