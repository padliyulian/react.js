import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import './App.css';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Blog from "./components/pages/Blog"
import Account from "./components/pages/Account"
import Notfound from "./components/pages/Notfound"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/blog" component={Blog} exact />
              <Route path="/account/:id" component={Account} exact />
              <Route component={Notfound} />
            </Switch>  
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
