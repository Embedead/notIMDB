import React from 'react'
import "./loginComponents.scss"
interface Props {
    children?: React.ReactNode
}
export const LoginBlock = ({children} : Props) => {
    return(
        <div className="Block">
            {children}
        </div>
    )
}