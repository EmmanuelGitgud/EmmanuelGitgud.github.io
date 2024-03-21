import './ProjectsTile.css'

function Tiles(props){
    return(
        <>
        <div style={{backgroundImage: `url(${props.src})`,
             backgroundRepeat: 'no-repeat',
             backgroundPositionX: 'center',
             backgroundSize: 'cover'}} className='proj-container'>
            <h1 id='proj-name'>{props.name}</h1>
        </div>
        </>
    )
}

export default Tiles