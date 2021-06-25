import React from 'react'
import "./homepageComponents.scss"

interface IProps{
    children?: React.ReactNode
}

export const LilacBar = (props: IProps) => {
    return(
        <div className="bar">
            {props.children}
        </div>
    )
}