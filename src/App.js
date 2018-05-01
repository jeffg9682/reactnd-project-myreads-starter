/** References for major assistance with REACT code
https://www.npmjs.com
https://github.com/tsega/udacity
https://github.com/ddavig
**/

import React from 'react';
import SearchPage from './SearchPage';
import './App.css';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';


class BooksApp extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={BooksList} />
        <Route path="/search" component={SearchPage}/>
      </div>
    );  
  }
} 

  

export default BooksApp
