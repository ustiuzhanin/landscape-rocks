import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Catalog from './containers/Catalog/Catalog';
import Contacts from './containers/Contacts/Contacts';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/catalog' exact component={Catalog} />
            <Route path='/contacts' exact component={Contacts} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
