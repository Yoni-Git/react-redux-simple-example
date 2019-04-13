import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBookAction , deleteBookAction} from '../actions/book-actions'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList=()=> {
        return this.props.booksReducer.books.map( book => {
            return (
                    <div>
                            <a
                                href="#" key={book.title}
                                onClick={() => this.props.selectBook(book)}
                                className="list-group-item list-group-item-action">
                                {book.title}   <small className="float-sm-right"> - በ {book.author}</small>
                            </a>
                    </div>

            )
        })
    };

    render() {
        return (
            <div className="col-sm-6">

                    <h5 className="display-4">Book Shelf</h5>
                    <div className="list-group card-text">
                        {this.renderList()}
                    </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBookAction ,deleteBook: deleteBookAction  }, dispatch)
}

function mapStateToProps(state) {
    return { booksReducer: state.booksReducer }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)