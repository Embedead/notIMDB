import React from 'react'

export const useLogin = () => {

    const handleLogin = (data: any) => {
        window.sessionStorage.setItem("name", data);
    }

    const getUser = (data: any) => {
        let username = window.sessionStorage.getItem(data)
        if(username === null) username ='';
        return username;
    }

    const handleLogout = () => {
        window.sessionStorage.setItem("name", '');
        window.location.assign('/');
    }

    return {
        handleLogin,
        getUser,
        handleLogout
    }
}