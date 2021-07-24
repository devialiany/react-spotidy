import React, { useState } from "react"
import './TrackCard.css'
import useTodos from '../../pages/FavoritePage/FavoritePage'

function TrackCard(props){
    let track = props.track
    
    return(
        <div key={track.id} className="card" >
            <div className="card-body">
                <h3 className="card-title">{track.name}</h3>
                <p className="card-title">
                    <audio src={track.preview_url} controls/>
                </p>
                <input type="hidden" value={track.name} />
                <p className="card-title">
                    <button className='btn btn-success btn-sm'>Add Favorite</button>
                </p>
            </div>
        </div>
    )
}

export default TrackCard