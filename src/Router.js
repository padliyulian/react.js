import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MetaTags from "react-meta-tags"
// import { Navbar } from "./components/layouts"
// import { Footer } from "./components/layouts"
import { Login, NotFound, Dashboard, Product  } from "./views/Pages/"
import PrivateRoute from "./PrivateRoute"

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
              <div className="App">
                <MetaTags>
                  <title>Mindaperdana | Welcome</title>
                  <meta name="author" content="padli yulian" />
                  <meta name="keywords" content="react.js, redux" />
                  <meta name="description" content="react.js app" />
                </MetaTags>
                {/* <Navbar /> */}
                <main>
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/product' component={Product} />
                    <Route component={NotFound} />
                  </Switch>  
                </main>
                {/* <Footer /> */}
              </div>
            </BrowserRouter>
        )
    }
}
