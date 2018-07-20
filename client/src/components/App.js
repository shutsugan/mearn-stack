import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import AppNavbar from './AppNavbar';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal />
          <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
