import React from 'react';
import { useEffect, useState } from 'react';
import siteData from '../../../assets/js/site_data'
import './skill.scss';



function Skill ({skill}) {

    const [currentPercent, setCurrentPercent] = useState(0)

    useEffect(() => {
        const percentIncreasingInterval = setInterval(() => {
            setCurrentPercent((prevPercent) => prevPercent + (1 - prevPercent / skill.percent) * siteData.skillFillSpeed)
        }, 10)
        return () => clearInterval(percentIncreasingInterval);
    }, [])


    return(
        <div className="resume__skill">
            <h5>{skill.name}</h5>
            <div className="skill__graph">
                <span>{Math.round(currentPercent)}%</span>
                <div>
                    <div className="skill__percent-line" style={{width: `${Math.round(currentPercent)}%`}}></div>
                </div>
            </div>
        </div>
    )
}


export default Skill;
