import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import {deleteBookAction, selectBookAction} from "../actions/books-actions";

class BookBasket extends Component {

    render() {
           return (
               <div className="card col-sm-6">
                   <div className="card-body">
                       <h5 className="card-title display-4">Basket</h5>
                       <ul className="list-group">{this.props.selectedBooks.map(book => {
                           return <li  key={book.title} className="list-group-item list-group-item-success">{ book.title}</li>})}
                       </ul>
                       <div >
                           <button onClick={this.props.deleteBook} type="button" className="btn btn-danger col-sm-12"
                           disabled={this.props.selectedBooks.length === 0 }>Clear Basket</button>
                       </div>
                   </div>
               </div>
                )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBookAction ,deleteBook: deleteBookAction  }, dispatch)
}
function mapStateToProps(state) {
    return { selectedBooks: state.booksReducer.selectedBooks }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookBasket)
