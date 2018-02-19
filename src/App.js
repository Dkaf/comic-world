import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Header } from 'semantic-ui-react';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import NewsPage from './components/NewsPage';
import ArticlesPage from './components/ArticlesPage';
import ContactPage from './components/ContactPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header as="h1" className="App-title">Comic World</Header>
          <Header sub>Hours</Header>
          <span>Tuesday-Sunday 12:00P.M.-9:00P.M.</span>
          <span>(563) 845-0170</span>
          <NavBar/>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
