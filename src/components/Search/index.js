import React, {useState, useEffect} from 'react';
import {SearchBox, SearchInput, ButtonSearch } from "./style"
import SearchIcon from '@mui/icons-material/Search';

const Search = ()=>{
    return(
        <SearchBox>
            <SearchInput placeholder="Pesquisar"></SearchInput>
            <ButtonSearch>
            <SearchIcon sx={{fontSize: 30, textAlign: 'center'}}></SearchIcon>
            </ButtonSearch>
            
        </SearchBox>
    )
}

export default Search