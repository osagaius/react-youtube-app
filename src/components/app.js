import React from 'react';
import { Component } from 'react';
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyCvppKt9YXvdEjjVzWFMdcI05cuAHuKQ7A';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}
