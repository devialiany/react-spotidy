import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AlbumCard from "../../components/AlbumCard/AlbumCard"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function ListSearchPage(){
    let {keyword} = useParams()
    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(keyword)}`)
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
                <h4>Search result for '{keyword}'</h4>
            </div>
            <div className="album-container">
                {albums?.map(album=>{
                    return(
                        <AlbumCard key={album.id} album={album} artist={keyword}/>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}


export default ListSearchPage