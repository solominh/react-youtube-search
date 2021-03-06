import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {


    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// state is application state
// state is rootReduce in ./reducers/index.js
function mapStateToProps(state) {
    console.log('BookList', 'mapStateToProps', state);

    return {
        books: state.books
    };
}

function mapActionToProps(dispatch) {
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapActionToProps)(BookList);
