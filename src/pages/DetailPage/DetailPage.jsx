import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import TrackCard from "../../components/TrackCard/TrackCard"

function DetailPage(){
    let {id} = useParams()
    const [tracks, setTracks] = useState([])

    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setTracks(data.data)
        })
    },[])

    return(
        <div>
            <Header/>
            {tracks?.map(track=>{
                return(
                    <TrackCard track={track} key={track.id}/>
                )
            })}
            <Footer/>
        </div>
    )
}

export default DetailPage