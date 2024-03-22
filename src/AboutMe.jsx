import './AboutMe.css'
import { Link } from 'react-router-dom'

function AboutMe(){
    return(
        <>
        <div className='about-me-container'>
            <div className='content-container'>
                <h1 id='about-title'>&lt;About Me/&gt;</h1>
                <div className='container-wrapper'>
                <div className='left-container'>
                <h2 id="code">
    <span className="variable-type">const</span>&nbsp;<span className="main-variable">aboutMe</span> = <span className="square-brackets">[</span><span className="outer-bracket">&#123;</span><br />
    <span className="variable">&nbsp;&nbsp;&nbsp;&nbsp;Personal_Info</span>:<span className="inner-bracket">&#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Name</span>: "<span className="string">Emman Arabit</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Age</span>: <span className="int">21</span>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">From</span>: "<span className="string">Binangonan, Rizal</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="inner-bracket">&#125;</span>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Interests</span>:<span className="inner-bracket">&#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Likes</span>:<span className="square-brackets">[</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="string">Coffee</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="string">Cats</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="string">Computers</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="square-brackets">]</span>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">Hobbies</span>:<span className="square-brackets">[</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="string">Coding</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="string">Drawing</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="string">Rubik's Cube</span>",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="square-brackets">]</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="inner-bracket">&#125;</span> <br />
    <span className="outer-bracket">&#125;</span><span className="square-brackets">]</span>;
                </h2>
                </div>
                <hr/>
                <div className='right-container'>
                    <h2 id="description">
                    As a recent graduate with a passion for coding, I spend my time making apps and delving into various programming projects. When I'm not immersed in code, you can often find me enjoying the company of my feline friends or savoring a cup of coffee.                    </h2>
                </div>
                </div>
                <div className='box-wrapper'>
                    <div id="button-wrapper">
                        <Link to='/contact'>Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe