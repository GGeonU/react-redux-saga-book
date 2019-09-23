import React from 'react'
import styled from "styled-components";
import Items from "./Items";

const BookList = styled.div`
    width: 47%;
    height: 250px ;
    background-color: white;
    margin-bottom: 70px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow-scrolling: inherit;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    cursor: pointer;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const SearchResult = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 70px 50px 50px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    overflow-scrolling: auto;
    overflow: auto;
`;

const AddButton = styled.button`
    height: min-content;
    margin-top: auto;
    margin-bottom: 0;
`


const Book = ({book, loadingBook, addMyBook}) => {

    return(
        <div>
            {loadingBook && 'loading...'}
            {!loadingBook && book && (
                <SearchResult>
                    {book.map(item =>
                        <BookList key={item.isbn}>
                                <Items
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    author={item.authors}
                                    publisher={item.publisher} />
                                <AddButton id={item.isbn} onClick={addMyBook}>+</AddButton>
                        </BookList>
                    )}
                </SearchResult>
            )}
        </div>
    )
};

export default Book;