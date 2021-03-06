import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import Home from './containers/Home/Home';
import Catalog from './containers/Catalog/Catalog';
import About from './containers/About/About';
import Articles from './containers/Articles/Articles';
import FullArticle from './components/Article/FullArticle/FullArticle';
import Contacts from './containers/Contacts/Contacts';
import ContactForms from './containers/Contacts/ContactForms/ContactForms'
import Layout from './hoc/Layout/Layout';
import ProductOrder from './containers/Catalog/ProductOrder/ProductOrder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollToTop>
          <Layout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/catalog' exact component={Catalog} />
              <Route path='/about' exact component={About} />
              <Route path='/articles' exact component={Articles} />
              <Route path='/articles/:id' exact component={FullArticle} />
              <Route path='/contacts' exact component={Contacts} />
              <Route path='/contacts/:id' exact component={ContactForms} />
              <Route path='/catalog/:id' exact component={ProductOrder} />
            </Switch>
          </Layout>
        </ScrollToTop>
      </div>
    );
  }
}
export default App;
