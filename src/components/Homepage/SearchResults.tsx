import React from 'react'
import {ISearchResults} from "../../pages/Homepage/"

interface IMovie{
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export const SearchResults = ({Search}: ISearchResults) => {
    return(
        <>
            {Search[0].imdbID!=='' && 
                <div className="SearchResults">
                {Search.map((item:IMovie, key:number) => {
                    return(
                        <span key={key}>
                            <img src={item.Poster} alt="poster"/>
                            <label>
                            {item.Title}

                            </label>
                        </span>
                    )
                })}
                </div>
            }
            </>
    )
}