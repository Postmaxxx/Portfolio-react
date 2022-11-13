import React from 'react';
import './contact_block.scss'


const ContactBlock = (props) => {
    return (
    <div className="contact-block">
        <div className="img-container">
            <img src={props.image} alt="" className="contact__img" />
        </div>
        <div className="contact-info">
            <span>{props.header}</span>
            {props.links.map((link, index) => <a href={link.link} key={index}>{link.text}</a>)}
        </div>
    </div>

    )
}


export default ContactBlock;
