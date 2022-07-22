import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { getUsersError, getUsersLoading, getUsersSuccess } from "../redux/actions";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const SearchBar = ( ) => {
const dispatch=useDispatch();

const [searchKey, setSearchKey]=useState("");

const handleSearch = () => {
dispatch(getUsersLoading());
    fetch(`https://api.github.com/search/users?q=${searchKey}`)
    .then(res=>res.json())
    .then(data=> dispatch(getUsersSuccess(data)))
    .catch(err=> dispatch(getUsersError()))
    setSearchKey("");
}
    return (      

        <>
        <div style={{backgroundColor:"teal", padding:"30px"}}>
                <input type="text" value={searchKey} onChange={(e)=> setSearchKey(e.target.value)}/>
                <Button onClick={handleSearch} variant="contained">Search</Button>
        </div>
    
        </>
    )
}