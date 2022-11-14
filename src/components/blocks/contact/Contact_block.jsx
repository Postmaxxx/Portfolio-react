import React from 'react';
import './contact_block.scss'


const ContactBlock = (props) => {
    return (
    <div className="contact-block">
        <div className="img-container">
            {props.image}
        </div>
        <div className="contact-info">
            <span>{props.header}</span>
            {props.links?.map((link, index) => <a href={link.link} key={index} target={link.new ? "_blank" : null}>{link.text}</a>)}
        </div>
    </div>

    )
}


export default ContactBlock;
