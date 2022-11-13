import React from 'react';
import * as actions from '../../assets/redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Skill from '../../components/blocks/skill/Skill';
import History from '../../components/blocks/history/History';
import imgCase from '../../assets/img/svg/case.svg';
import siteData from '../../assets/js/site_data';
import './resume.scss';




const Resume = () => {
    return(
        <div className="page-container">
            <div className="page_resume">
                <section className='skills'> 
                    <h2>My skills<em>My skills</em></h2>
                    <div className="skills__container">
                        {siteData.skills.map((skill, index) => {
                            return(
                                <Skill key={index} skill={skill}/>
                            )
                        })}
                    </div>
                </section>
                <section className='history'> 
                    <h2>Resume<em>Resume</em></h2>
                    
                    <div className='history__section'>
                        <div className="history__header">
                            <img src={imgCase} alt="" />
                            <h3>Work experience</h3>
                        </div>
                        <div className="history__content">
                            {siteData.workExperience.map((historyBlock, index) => {
                                return(
                                    <History key={index} historyBlock={historyBlock}/>
                                )
                            })}
                        </div>
                    </div>

                    <div className='history__section'>
                        <div className="history__header">
                            <img src={imgCase} alt="" />
                            <h3>Education</h3>
                        </div>
                        <div className="history__content">
                            {siteData.education.map((historyBlock, index) => {
                                return(
                                    <History key={index} historyBlock={historyBlock}/>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}


export default Resume;