import { ReactTyped } from 'react-typed'
import './Content.css'

function HeroBanner(){
    return(
        <>
        <div className='banner-container'>
            <h1>
                Hi I'm Emman, {" "}
                <ReactTyped strings={["Web Designer.","Fullstack Developer.","Game Developer.",]} typeSpeed={30} backSpeed={40} backDelay={2000}loop />
            </h1>
        </div>
        </>
    )
}

export default HeroBanner

