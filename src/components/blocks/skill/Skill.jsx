import React from 'react';
import { useEffect } from 'react';
import './skill.scss';



const Skill = ({skill}) => {

    return(
        <div className="resume__skill">
            <h5>{skill.name}</h5>
            <div className="skill__graph">
                <span>{skill.percent}%</span>
                <div>
                    <div className="skill__percent-line" style={{width: `${skill.percent}%`}}></div>
                </div>
            </div>
        </div>
    )
}


export default Skill;
