import preloader from '../preloader/preloader_template'
import './preloader.scss'


const Preloader = () => { 
    return <div dangerouslySetInnerHTML={{__html: preloader()}}></div> 
}


export default Preloader;