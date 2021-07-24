import { Link } from 'react-router-dom';
import './AlbumCard.css'

function AlbumCard(props){
    let album = props.album
    let name = props.artist

    return(
        <Link to={`/album/${album.id}`} className="card album-card">
            <img className="card-img-top" src={album.image} alt="" />
            <div className="card-body">
                <p className="card-subtitle">{name}</p>
                <h3 className="card-title">{album.name}</h3>
            </div>
        </Link>
    )
}

export default AlbumCard