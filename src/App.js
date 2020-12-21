import React from "react"
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/skills" exact component={Skills}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1 className="heading1">Hi, Welcome to my webpage</h1>
  </div>
);

export default App;
