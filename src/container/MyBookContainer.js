import React from 'react'
import {connect} from "react-redux";
import MyBook from "../component/MyBook";
import {deleteBook} from "../module/book";


const MyBookContainer = ({myBookList, deleteBook}) => {

    const onDeleteButtonClick = (e) => {
        console.log(e.target.id);
        deleteBook(e.target.id)
    };

    return (
        <MyBook myBookList={myBookList} onDeleteButtonClick={onDeleteButtonClick}/>
    )
};

export default connect(
    ({book}) => ({
        myBookList: book.myBookList
    }), {
        deleteBook,
    },
)(MyBookContainer);