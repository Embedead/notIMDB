import React from 'react'
import './homepageComponents.scss'
interface IProps{
    name?: string
}
export const GreetingCard = ({name = 'User'}: IProps) => {
    return(
        <span className="GreetingsSpan">
            <label onClick={()=> {
                window.sessionStorage.setItem("name", '')
                window.location.assign('/')
                }}>Greetings {name}</label>
        </span>
    )
}