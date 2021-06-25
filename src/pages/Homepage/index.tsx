import React from 'react'
import "./homepage.scss"
import { GreetingCard } from '../../components/Homepage/GreetingCard'
import { LilacBar } from '../../components/Homepage/LilacBar'
import { SearchBar } from '../../components/Homepage/SearchBar'
import { SearchContainer } from '../../components/Homepage/SearchContainer'
import { SearchResults } from '../../components/Homepage/SearchResults'

import {useLogin} from "../../hooks/useLogin"

export interface ISearchResults{
    Search: [{
        Poster: string,
        Title: string,
        Type: string,
        Year: string,
        imdbID: string

    }]
}
export const defaultSearchResults:ISearchResults = {Search:[{Poster:'', Title:'', Type:'', Year:'',imdbID:''}]};
export const Homepage = () => {
    const [searchResults, setSearchResults] = React.useState<ISearchResults>(defaultSearchResults);
    const {getUser} = useLogin();
    
    console.log("state is", searchResults)


    return(
        <div className="Homepage">
            <LilacBar>

            <GreetingCard name={getUser("name")}/>
            </LilacBar>
            <SearchContainer>
                <SearchBar setSearchResults={setSearchResults}/>
                <SearchResults Search={searchResults.Search}/>
            </SearchContainer>
        </div>
    )
}