import React from 'react';
import './homepageComponents.scss';
import {useLogin} from "../../hooks/useLogin"
interface IProps{
    name?: string
}
export const GreetingCard = ({name = 'User'}: IProps) => {
    const {handleLogout} = useLogin()
    return(
        <span className="GreetingsSpan">
            <label onClick={handleLogout}>Greetings {name}</label>
        </span>
    )
}