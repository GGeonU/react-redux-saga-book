import React, {useState} from 'react';
import './App.css';
import BookContainer from "./container/BookContainer";
import styled from "styled-components";
import Book from "./component/Book";
import MyBookContainer from "./container/MyBookContainer";

const Section = styled.section`
    height: 100%;
    display: block;
    justify-content: center;
`;
const SelectBox = styled.select`
    width: min-content;
`;

const SelectDiv = styled.div`
    width: 768px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
`;


const App = () => {
    const [optionType, setOptionType] = useState('Search');

    const onChangeOptionType = (e) => {
        setOptionType(e.target.value)
    };

    return (
        <Section>
            <SelectDiv>
                <SelectBox onChange={onChangeOptionType}>
                    <option value='Search'>Search</option>
                    <option value='MyList'>MyList</option>
                </SelectBox>
            </SelectDiv>
            {optionType === 'Search' ? <BookContainer/> : <MyBookContainer/>}
        </Section>
    );
}

export default App;
