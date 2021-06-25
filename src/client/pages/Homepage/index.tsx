import React from 'react'
import "./homepage.scss"
import { GreetingCard } from '../../components/Homepage/GreetingCard'
import { LilacBar } from '../../components/Homepage/LilacBar'
import { SearchBar } from '../../components/Homepage/SearchBar'

export const Homepage = () => {
    console.log("session storage is", window.sessionStorage.getItem("name"))

    return(
        <div className="Homepage">
            <LilacBar>

            <GreetingCard name={window.sessionStorage.getItem("name") || ""}/>
            </LilacBar>
            <SearchBar/>
        </div>
    )
}