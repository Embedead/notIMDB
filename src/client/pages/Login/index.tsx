import React from 'react'
import './login.scss'
import {LoginBlock} from "../../components/Login/Block"
import { LilacTitle } from '../../components/Login/Title'
import { LoginInput } from '../../components/Login/Input'
import { LoginButton } from '../../components/Login/Button'
export const LoginPage = () => {
    const handleClick = () => {
        console.log("button clicked")
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
