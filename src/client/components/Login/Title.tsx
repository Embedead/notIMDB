import React from 'react'
interface IProps{
    title: string
}
export const LilacTitle = ({title}: IProps) => {
    return(
        <label className="LilacTitle">{title}</label>
    )
}