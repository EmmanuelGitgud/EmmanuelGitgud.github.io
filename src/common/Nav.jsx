import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function NavDesktop() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCheckboxChange = () => {
        setIsMenuOpen(!isMenuOpen)
        if (isMenuOpen) {        
            document.body.style.overflow = 'auto'            
        } else {
            document.body.style.overflow = 'hidden'
        }
    };

    const changePage = () =>{
        if(isMenuOpen){
            setIsMenuOpen(!isMenuOpen)  
        }
        document.body.style.overflow = 'auto'  
    }
    return (
        <>
            <nav> 
                <input type="checkbox" id="check" checked={isMenuOpen} onClick={handleCheckboxChange} />
                <div className="top-wrapper">
                    <h1 id="logo"><Link to="/" onClick={changePage}>&lt;/&gt;</Link></h1>
                    <label htmlFor="check" id="hamburger-nav">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></h1>
                    </label>
                    <ul className='hide-on-mobile'>
                        <li className="nav-item"><Link to="/" onClick={changePage}>Home</Link></li>
                        <li className="nav-item"><Link to="/skills" onClick={changePage}>Skills</Link></li>
                        <li className="nav-item"><a href="projects.html" onClick={changePage}>Projects</a></li>
                        <li className="nav-item"><a href="about.html" onClick={changePage}>About</a></li>
                    </ul>
                </div>
                <div className="bottom-wrapper">
                    <ul>
                        <li className="nav-item"><Link to="/" onClick={changePage}>Home</Link></li>
                        <li className="nav-item"><Link to="/skills" onClick={changePage}>Skills</Link></li>
                        <li className="nav-item"><a href="projects.html" onClick={changePage}>Projects</a></li>
                        <li className="nav-item"><a href="about.html" onClick={changePage}>About</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop;
