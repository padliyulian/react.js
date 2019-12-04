import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MetaTags from "react-meta-tags"
// import { Navbar } from "./components/layouts"
// import { Footer } from "./components/layouts"
import { Login } from "./views/Pages/"
import { Dashboard } from "./views/Pages/"
import { NotFound } from "./views/Pages/"

function Router() {
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
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>  
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default Router
