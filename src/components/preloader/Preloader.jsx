import React from "react";
import './preloader.scss'
import preloader from '../preloader/preloader.js'


const Preloader = () => { 
    return <div dangerouslySetInnerHTML={{__html: preloader()}}></div> 
}


export default Preloader;
