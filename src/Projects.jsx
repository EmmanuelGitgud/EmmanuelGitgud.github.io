import './Projects.css'
import Tiles from './common/ProjectsTile'

function MySkills(){
    return(
        <>
        <div className='project-wrapper'>
            <div className='project-banner'>
                <h1>Check out some of my works.</h1>
            </div>
            <div className='tile-container'>
                <Tiles src="sharp.webp" name="Sharp Travel Service"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="dm.webp" name="Downtown Wellness and Weightloss"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="zom1.webp" name="Mind Over Zombie"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="ralf.webp" name="Adventures of Ralf"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="spaceshooter.webp" name="2D Spaceshooter"
                description="Lorem Ipsum Dolor"/>
            </div>   
        </div>
        </>
    )   
}

export default MySkills