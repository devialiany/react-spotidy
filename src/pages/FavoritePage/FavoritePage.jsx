import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import useLocalStorageState from "use-local-storage-state";

function FavoritePage(){
    
    const playlists = useLocalStorageState("Playlist", ["Playlist 1", "Playlist 2"]);

    return(
        <div>
            <Header/>
            {playlists[0].map((t, i) => (
                <p key={i}>{t}</p>
            ))}
            <Footer/>
        </div>
    )
}

export default FavoritePage