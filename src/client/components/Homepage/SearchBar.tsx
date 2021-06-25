import React from 'react'
import axios from 'axios'
import {search} from "../../../api"
export const SearchBar = () => {
    const [searchQuery,setSearchQuery] = React.useState('')
    const handleSearch = (query:string)=> {
        search(query).then((res)=> {
            console.log("res data is", res.data)
        })
    }

    React.useEffect(()=>{
        if(searchQuery!=='' || searchQuery.length>3) handleSearch(searchQuery)
    },[searchQuery])
    console.log("search query is", searchQuery)
    return(
        <input className="SearchBar" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    )
}