import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MetaTags from "react-meta-tags"
import { Navbar } from "./components/layouts"
import { Footer } from "./components/layouts"
import { List } from "./pages/"
import { Add } from "./pages/"
import { Edit } from "./pages/"
import { Detail } from "./pages"
import { NotFound } from "./pages/"

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
            <Route path="/" component={List} exact />
            <Route path="/add" component={Add} />
            <Route path="/account/:id" component={Detail} />
            <Route path="/editAccount/:id" component={Edit} />
            <Route component={NotFound} />
          </Switch>  
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
