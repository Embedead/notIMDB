import React from 'react'
import './loginComponents.scss'
import {useLogin} from '../../hooks/useLogin'

export const LoginInput = () => {
    const {handleLogin} = useLogin();
    const [username,setUsername] = React.useState('');
    React.useEffect(()=>{
        handleLogin(username)
    },[username])
    return(
        <input type="text" className="LoginInput" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    )
}