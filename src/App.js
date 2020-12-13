import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
          <Layout style={{minHeight:"100vh"}}>
              <Header />
              <Layout>
                  <Sidebar />
                  <Layout style={{ padding: '0 24px 24px' }}>
                      <Layout.Content
                          className="site-layout-background"
                          style={{
                              padding: 24,
                              margin: 0,
                              minHeight: 280,
                          }}>
                          <Switch>
                              <Route path="/dashboard" component={Dashboard} />
                              <Route exact path="/" component={Home} />
                              <Route path="*">
                                  <p>Not found</p>
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
