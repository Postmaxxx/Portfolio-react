import React from "react";
import './contact.scss';
import Input from '../../components/blocks/input/Input';
import Textarea from '../../components/blocks/textarea/Textarea';
import ContactBlock from "../../components/blocks/contact/Contact_block";
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import imgPhone from '../../assets/img/svg/phone.svg';

const Contact = (props) => {

    return (
        <div className="page-container">
            <div className="page_contact">
                <section className='contact-me'> 
                    <h2>Contact me<em>Contact me</em></h2>
                    <h4>Get In Touch</h4>
                    <div className="contact__container">
                        <div className="mail-me">
                            <Input 
                                id='contact_name'
                                text='Your name*'
                                changeValue={ (e) => props.setStore.setContactName(e.target.value) }
                                value={props.store.contact.name}
                                required={true}
                                type='text'
                                name='name'
                                />
                            <Input 
                                id='contact_email*'
                                text='Your email'
                                changeValue={ (e) => props.setStore.setContactEmail(e.target.value) }
                                value={props.store.contact.email}
                                required={true}
                                type='email'
                                name='email'
                                />
                            <Input 
                                id='contact_subject'
                                text='Your subject'
                                changeValue={ (e) => props.setStore.setContactSubject(e.target.value) }
                                value={props.store.contact.subject}
                                required={false}
                                type='text'
                                name='subject'
                                />
                            <Textarea
                                id='contact_message'
                                text='Your message*'
                                changeValue={ (e) => props.setStore.setContactMessage(e.target.value) }
                                value={props.store.contact.message}
                                required={true}
                                type='text'
                                name='message'
                                />
                            <button href="" className="link_button">Send message</button>                     
                        </div>
                        <div className="my-info">
                            <ContactBlock 
                                image={imgPhone}
                                header='Phone'
                                links={[
                                    {
                                        link: 'tel:+905073423990',
                                        text: '+90 507 342 39 90'
                                    },
                                ]}
                            />
                            <ContactBlock 
                                image={imgPhone}
                                header='Email'
                                links={[
                                    {
                                        link: 'mailto:max@postnikov.dev',
                                        text: 'max@postnikov.dev'
                                    },
                                    {
                                        link: 'mailto:maksim.postnikov.it@gmail.com',
                                        text: 'maksim.postnikov.it@gmail.com'
                                    }

                                ]}
                            />
                            <ContactBlock 
                                image={imgPhone}
                                header='Social'
                                links={[
                                    {
                                        link: 'https://www.linkedin.com/in/maksim-postnikov/',
                                        text: 'Linkedin'
                                    },
                                    {
                                        link: 'facebook.com',
                                        text: 'Facebook'
                                    }

                                ]}
                            />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Contact);
