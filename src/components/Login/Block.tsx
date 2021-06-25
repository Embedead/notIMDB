import React from 'react'
import "./loginComponents.scss"
interface IProps {
    children?: React.ReactNode
}
export const LoginBlock = ({children} : IProps) => {
    return(
        <div className="Block">
            {children}
        </div>
    )
}