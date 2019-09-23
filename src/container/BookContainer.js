import React, {useState} from 'react'
import {getBook, addMyBook} from '../module/book'
import {connect} from "react-redux";
import Book from "../component/Book";
import styled from "styled-components";

const SearchInput = styled.input`
    background: white none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: black;
    flex: 1;
`;

const SearchButton = styled.button`
    background: #868e96 none;
    outline: none;
    border: none;
    color: white;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
`;

const SearchTab = styled.div`
    width: 768px;
    max-width: 768px;
    height: 10%;
    display: flex;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
`;
const SearchDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
`;


const BookContainer = ({bookList, myBookList, loadingBook, getBook, addMyBook}) => {
    const [query, setQuery] = useState('');

    const onChangeQuery = (e) => {
        setQuery(e.target.value);
    };

    const onClickSearchButton = () => {
        getBook(query);
    };

    const onClickAddButton = (e) => {
        let index = bookList.findIndex(it => it.isbn === e.target.id);
        addMyBook(bookList[index]);
        alert('추가되었습니다');
    };

    return (
        <div>
            <SearchDiv>
                <SearchTab>
                    <SearchInput type="text" onChange={onChangeQuery} value={query} placeholder="검색(제목, 저자, 출판사)"/>
                    <SearchButton onClick={onClickSearchButton}>Q</SearchButton>
                </SearchTab>
            </SearchDiv>
            <div>
                <Book book={bookList}
                      loadingBook={loadingBook}
                      addMyBook={onClickAddButton}
                />
            </div>
        </div>
)


};

export default connect(
({book, loading}) => ({
    bookList: book.bookList,
    myBookList: book.myBookList,
    loadingBook: loading.GET_BOOK,
}),
{
    getBook,
    addMyBook,

}
)(BookContainer);