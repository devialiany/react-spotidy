import { Link } from 'react-router-dom'
import './Header.css'

function Header(){
    return(
        <div className="header-container">
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand ml">SpotiDY</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <Link className="nav-link" to='/'>Top Artist: Westlife</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to='/search'>Search Album</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to='/favorite' >My Favorite</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header