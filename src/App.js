import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MetaTags from 'react-meta-tags'
import Navbar from "./components/layouts/NavContainer"
import './App.css';
import Home from "./components/pages/Home"
import Add from "./components/pages/Add"
import Portfolio from "./components/pages/Portfolio"
import Blog from "./components/pages/Blog"
import detailAccount from "./components/comps/bank/DatailAccountCont"
import editAccount from "./components/comps/bank/EditAccountCont"
import Notfound from "./components/pages/Notfound"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MetaTags>
            <title>Account | Welcome</title>
            <meta name="author" content="padli yulian" />
            <meta name="keywords" content="react.js, redux" />
            <meta name="description" content="react.js app" />
          </MetaTags>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/add" component={Add} exact />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/blog" component={Blog} exact />
              <Route path="/account/:id" component={detailAccount} exact />
              <Route path="/editAccount/:id" component={editAccount} exact />
              <Route component={Notfound} />
            </Switch>  
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
