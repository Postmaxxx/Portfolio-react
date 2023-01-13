import preloader from '../preloader/preloader.js'
import './preloader.scss'


const Preloader = () => { 
    return <div dangerouslySetInnerHTML={{__html: preloader()}}></div> 
}


export default Preloader;
