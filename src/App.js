import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Layout } from 'antd';
import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Customers from './pages/customers/Customers';
import Products from './pages/products/Products';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Error404 from './pages/error404/Error404';

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
          <Layout style={{minHeight:"100vh"}}>
              <Header />
              <Layout style={{ marginLeft: 200 }}>
                  <Sidebar />
                  <Layout style={{ padding: '64px 24px 24px 24px' }}>
                      <Layout.Content
                          className="site-layout-background"
                          style={{
                              padding: 24,
                              margin: 0,
                              minHeight: 280,
                          }}>
                          <Switch>
                              <Route path="/customers" component={Customers} />
                              <Route path="/products" component={Products} />
                              <Route path="/login" component={Login} />
                              <Route path="/register" component={Register} />
                              <Route path="/404" component={Error404} />
                              <Route exact path="/" component={Dashboard} />
                              <Route path="*">
                                  <Redirect to={'/404'} />
                              </Route>
                          </Switch>
                      </Layout.Content>
                  </Layout>
              </Layout>
          </Layout>
      </Router>
  );
}

export default App;
