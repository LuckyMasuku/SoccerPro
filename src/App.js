import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import React, { Component } from 'react';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
//controls i use
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';


class App extends Component {
  render(){
  return (
    //router wraps the whole function
    <Router>
    <div className="App">

      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
    
  </Navbar>


  <br/>
  
  <Switch>
    
    <Route path='/home' component={Content} exact/>
    <Route path='/create' component={Create} exact />
   <Route path='/read' component={Read} exact />
  </Switch>
    
    </div>
    </Router>
  );
}
}

export default App;
