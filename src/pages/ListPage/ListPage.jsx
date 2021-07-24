import React, { useState, useEffect } from "react"
import AlbumCard from "../../components/AlbumCard/AlbumCard"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './ListPage.css'

function ListPage(){

    const [albums, setAlbums] = useState([])
    const name = "Westlife"

    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAlbums(data.data.albums)
        })
    },[])

    return(
        <div>
            <Header/>
            <div className="title">
                <h2>Top Artist This Summer</h2>
                <h3>"Westlife"</h3>
                <span>“so impossible as it may seem, you've got to fight for every dream..for whose to know which one you let go, would have made your life complete” ― Westlife: Our Story</span>
            </div>
            <div className="album-container">
                {albums?.map(album=>{
                    return(
                        <AlbumCard key={album.id} album={album} artist={name}/>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default ListPage