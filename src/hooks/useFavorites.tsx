import React from 'react'

export const useFavorites = () => {
    const addToFavorites = (data: string) => {
        let favorites: string | null = window.sessionStorage.getItem("favorites");
        if(favorites === null) window.sessionStorage.set("favorites", data);
        else window.sessionStorage.set("favorites", favorites + "," + data);
        console.log("favorites are", window.sessionStorage.getItem("favorites"));
    }
}