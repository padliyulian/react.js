import React from 'react';
import MetaTags from 'react-meta-tags'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/admin/layouts/Navbar';
import Sidebar from './components/admin/layouts/Sidebar';
import ControlSidebar from './components/admin/layouts/ControlSidebar';
import Footer from './components/admin/layouts/Footer';
import Admin from './views/admin';
import Users from './views/admin/users';
import Employees from './views/admin/employees';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MetaTags>
          <title>Admin | Dashboard</title>
          <meta name="author" content="padli yulian" />
          <meta name="keywords" content="react.js, admin-lte" />
          <meta name="description" content="react.js dashboard with admin-lte" />
        </MetaTags>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content">
            <main>
              <Switch>
                <Route path="/" component={Admin} exact />
                <Route path="/admin/users" component={Users} exact />
                <Route path="/admin/employees" component={Employees} exact />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>  
        </div>
        <ControlSidebar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
