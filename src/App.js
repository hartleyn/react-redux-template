import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
