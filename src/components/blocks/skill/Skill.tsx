import { useEffect, useState } from 'react';
import { MySkill } from 'src/models';
import './skill.scss';

//type TSkillSetPercent = (number) => number
//let myIdentity: <T>(arg: T) => T;

interface ISkill {
    skill: MySkill
    speed: number
}

interface IUseEffect {
    (): ReturnType<typeof clearInterval>
} 

type TUseState = [number, Function]




function Skill ({skill, speed}: ISkill): JSX.Element {

    const [currentPercent, setCurrentPercent]: TUseState = useState(0)

    useEffect((): IUseEffect  => {
        const percentIncreasingInterval: NodeJS.Timer = setInterval((): void => { 
            setCurrentPercent((prevPercent: number): number => (prevPercent < (skill.percent-.2) ? prevPercent + .1 + (1 - prevPercent / skill.percent) * speed : skill.percent));
            }, 10)
        return (): void => clearInterval(percentIncreasingInterval);
    }, [])


    return(
        <div className="resume__skill">
            <h5>{skill.name}</h5>
            <div className="skill__graph">
                <span>{Math.round(currentPercent)}%</span>
                <div>
                    <div className="skill__percent-line" style={{width: `${currentPercent.toFixed(2)}%`}}></div>
                </div>
            </div>
        </div>
    )
}


export default Skill;
