import { useState } from 'react';
import './Nav.css'

function NavDesktop(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCheckboxChange = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return(
        <>
            <nav>
                <input type="checkbox" id="check" checked={isMenuOpen} onChange={handleCheckboxChange} />
                <div className="top-wrapper">
                    <h1 id="logo"><a href="index.html">&lt;/&gt;</a></h1>
                    <label htmlFor="check" id="hamburger-nav">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></h1>
                    </label>
                </div>
                <div className="bottom-wrapper">
                    <ul>
                        <li className="nav-item"><a href="index.html">Home</a></li>
                        <li className="nav-item"><a href="skills.html">Skills</a></li>
                        <li className="nav-item"><a href="projects.html">Projects</a></li>
                        <li className="nav-item"><a href="about.html">About</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop