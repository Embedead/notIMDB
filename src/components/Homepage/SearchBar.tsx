import React from 'react'
import axios from 'axios'
// import {search} from "../../../api"
import {ISearchResults,defaultSearchResults} from '../../pages/Homepage'
interface IProps{
    setSearchResults: (searchResults:ISearchResults) => void
}
export const SearchBar = ({setSearchResults}:IProps) => {
    const [searchQuery,setSearchQuery] = React.useState('')
    const handleSearch = (query:string)=> {
        axios.get('http://www.omdbapi.com/?apikey=21db4918&s=' + query).then((res)=> {
            console.log("res data is", res.data);
            if(res.data.Response === "True") setSearchResults({Search: res.data.Search})
            else setSearchResults(defaultSearchResults);
        })
    }

    React.useEffect(()=>{
        if(searchQuery!=='') handleSearch(searchQuery)
    },[searchQuery])
    // console.log("search query is", searchQuery)
    return(
        <input className="SearchBar" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    )
}