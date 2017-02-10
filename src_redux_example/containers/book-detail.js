import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>
        }
        return (
            <div>
                <h3>Book details:</h3>
                <div>
                    Title: {this.props.book.title}
                </div>
                <div>
                    Page: {this.props.book.page}
                </div>
            </div>
        );
    }
}

// state is application state
// state is rootReduce in ./reducers/index.js
function mapStateToProps(state) {
    console.log('BookDetail', 'mapStateToProps', state);
    return {
        book: state.activeBook,
    }
}

export default connect(mapStateToProps)(BookDetail);
