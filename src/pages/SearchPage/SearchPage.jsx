import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './SearchPage.css'

function SearchPage(){
    const [keyword, setKeyword] = useState([])

    return (
        <div>
            <Header/>
            <div className='search-content'>
                <div className="search-container">
                    <input type="text" className="form-control" placeholder="Search Album" onChange={event => setKeyword(event.target.value)}/>
                    <Link className="btn btn-outline-light" to={`/artist/${keyword}`}>Search</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SearchPage