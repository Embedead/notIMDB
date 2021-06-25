import React from 'react'
import {useHistory} from 'react-router-dom'
import './login.scss'
import {LoginBlock} from "../../components/Login/Block"
import { LilacTitle } from '../../components/Login/Title'
import { LoginInput } from '../../components/Login/Input'
import { LoginButton } from '../../components/Login/Button'
export const LoginPage = () => {
    const history = useHistory();
    const handleClick = () => {
        console.log("button clicked")
        window.location.assign('/')
    }
    return(
        <div className="container">
            <LoginBlock>
            <LilacTitle title={"IM(not)Db"}/>
            <LoginInput/>
            <LoginButton handleClick={handleClick}/>
            </LoginBlock>
        </div>
    )
}
