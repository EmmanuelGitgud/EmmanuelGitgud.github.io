import './Projects.css'

function MySkills(){
    return(
        <>
        <div className='projects'>
            <h1>&lt;My Projects/&gt;</h1>
            <div className='projects-container'>
                <div className='project-item'>
                    <img src="sharp.jpg" alt="image" />
                    <h2>Sharp Travel Service</h2>
                </div>
                <div className='project-item'>
                    <img src="dm.jpeg" alt="image" />
                    <h2>Downtown Wellness and Weightloss</h2>
                </div>
                <div className='project-item'>
                    <img src="zom2.png" alt="image" />
                    <img src="zom1.png" alt="image" />
                    <h2>Mind Over Zombie</h2>
                </div>
                <div className='project-item'>
                    <div className='portrait-wrapper'>
                        <img src="spaceshooter.png" alt="image" />
                        <img src="spaceshooter2.png" alt="image" />
                    </div>
                    <h2>2D Space Shooter</h2>
                </div>
                <div className='project-item'>
                    <img src="ralf.png" alt="image" />
                    <img src="ralf1.png" alt="image" />
                    <h2>Adventures of Ralf</h2>
                </div>
            </div>
        </div>
        </>
    )   
}

export default MySkills