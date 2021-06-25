import React from 'react'
interface IProps {
    label?: string
    handleClick: ()=> void
}
export const LoginButton = ({handleClick}: IProps) => {
    return(
        <button className="LoginButton" onClick={handleClick}>login</button>
    )
}