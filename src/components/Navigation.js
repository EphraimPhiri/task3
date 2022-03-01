import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <div>
            <nav>
                <label className='heading'>BOOKSTORE</label>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Books</a></li>
                    <li><a href='#'>MagazinesArticles</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;