import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MetaTags from "react-meta-tags"
import Navbar from "./components/layouts/NavContainer"
import Home from "./pages/Home"
import Add from "./pages/Add"
import detailAccount from "./components/account/DatailAccountCont"
import editAccount from "./components/account/EditAccountCont"
import Notfound from "./pages/Notfound"

function App() {
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
            <Route path="/account/:id" component={detailAccount} exact />
            <Route path="/editAccount/:id" component={editAccount} exact />
            <Route component={Notfound} />
          </Switch>  
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
