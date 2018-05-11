/** References for major assistance with REACT code
https://www.npmjs.com
https://github.com/tsega/udacity
https://github.com/ddavig
**/
 

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BooksDetail from './BooksDetail';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
      state = {}
      
  handleUpdateQuery = event => {BooksAPI.search(event.target.value, 20).then(searchResultsBooks => {
    if (!searchResultsBooks || searchResultsBooks.error) 
      { this.setState({ searchResultsBooks: null }) 
    return 
  } 
    
    searchResultsBooks = searchResultsBooks.map(this.ensureBookHasCorrectShelf)

    this.setState({ searchResultsBooks })
   });
  }

  ensureBookHasCorrectShelf = book => { 
    const bookOnShelf = this.props.booksOnShelves.filter(item => item.id === book.id)[0]
    
    book.shelf = bookOnShelf ? bookOnShelf.shelf : ''

    return book
  }

    render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className='close-search'
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={event => this.handleUpdateQuery(event)}
              />
            </div>
          </div>
          <div className="search-books-results"> {
            this.state.searchResultsBooks && <BooksDetail books={this.state.searchResultsBooks} isSearch={true} 
            amendShelfHandler={this.props.amendShelfHandler} />} 
          </div>
      </div>

SearchPage.propTypes = { booksOnShelves: PropTypes.array, amendShelfHandler: PropTypes.func.isRequired }

export default SearchPage