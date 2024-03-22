import './Projects.css'
import Tiles from './common/ProjectsTile'

function MySkills(){
    return(
        <>
        <div className='wrapper'>
            <div className='tile-container'>
                <Tiles src="sharp.jpg" name="Sharp Travel Service"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="dm.jpeg" name="Downtown Wellness and Weightloss"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="zom1.png" name="Mind Over Zombie"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="ralf.png" name="Adventures of Ralf"
                description="Lorem Ipsum Dolor"/>

                <Tiles src="spaceshooter.png" name="2D Spaceshooter"
                description="Lorem Ipsum Dolor"/>
            </div>   
        </div>
        </>
    )   
}

export default MySkills