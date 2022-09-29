import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar' >
            <Link to="/characters">
                Characters
            </Link>
            <Link to="/quotes">
                Quote
            </Link>
        </div>
    )
}
export default Navbar