import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookBasket from '../containers/book-basket'


export default class App extends Component {

    render() {
    return (
      <div>
        <BookList />
        <BookBasket />
      </div>
    );
  }
}
