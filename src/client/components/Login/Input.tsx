import React from 'react'
import './loginComponents.scss'

export const LoginInput = () => {

    const [username,setUsername] = React.useState('');
    React.useEffect(()=>{
        window.sessionStorage.setItem("name", username);

    },[username])
    return(
        <input type="text" className="LoginInput" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    )
}