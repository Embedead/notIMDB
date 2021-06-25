import React from 'react'
interface IProps {
    children?: React.ReactNode
}
export const SearchContainer = (props: IProps) => {
    return(
        <div className="SearchContainer">
            {props.children}
        </div>
    )
}