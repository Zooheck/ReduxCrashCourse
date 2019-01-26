import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'


import Posts from './components/Posts'
import PostForm from './components/PostForm'

const store = createStore(() => [], {}, applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>

    );
  }
}

export default App;
