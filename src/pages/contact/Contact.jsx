import React from "react";
import './contact.scss';
import Input from '../../components/blocks/input/Input';
import Textarea from '../../components/blocks/textarea/Textarea';
import ContactBlock from "../../components/blocks/contact/Contact_block";
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import axios from "axios";
import { checkInput } from '../../assets/js/inputChecker';

const Contact = (props) => {
    
    const checkInputs = (inputs) => {
        let errorMessage  = '';
        Array.from(inputs).forEach((input) => {
            let error = checkInput(input.value, input.dataset.type, input.dataset.min_length,input.dataset.max_length);
            if (error && input.required) {
                input.parentNode.classList.add('incorrect')
                errorMessage = errorMessage + `\n${input.name} ${error} `
            }
        })
        if (errorMessage.length > 0) {
            alert('Errors detected:' + errorMessage)
            return false
        } else {
            return true;   
        } 
    }


    const sendMessage = () => {

        if (checkInputs(document.querySelectorAll('[data-input="contact"]'))) {
            console.log('start sending...', );
            let currentDate = new Date();
            let apiToken = "5853506207:AAGC04Apc66DTSienliOjh4evMA1CUTs2Wc";
            let chatId = "@postnikovdev";
            let text = `Date: ${currentDate.getDate() + '.' + currentDate.getMonth() + '.' + currentDate.getFullYear()}%0ATime: ${currentDate.getHours() + '.' + currentDate.getMinutes() + '.' + currentDate.getSeconds()}%0AName: ${props.store.contact.name}%0AEmail: ${props.store.contact.email}%0ATopic: ${props.store.contact.subject}%0A%0AMessage: ${props.store.contact.message}` ;
            let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
    
            axios.get(urlString )
            .then(function (response) {
                props.setStore.setContactName('');
                props.setStore.setContactEmail('');
                props.setStore.setContactSubject('');
                props.setStore.setContactMessage('');
                alert('Your message has been sent.');
            })
            .catch(function (error) {
                alert('Service error, please, try again later. Error: ' + error);
            })
            .then(function () {});

        }

    }



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
                                text='Your name *'
                                changeValue={ (e) => {
                                    props.setStore.setContactName(e.target.value) 
                                    e.target.parentNode.classList.remove('incorrect')
                                }}
                                value={props.store.contact.name}
                                required={true}
                                type='text'
                                checkType='all'
                                name='name'
                                data='contact'
                                minLength={2}
                                maxLength={15}
                                />
                            <Input 
                                id='contact_email'
                                text='Your email *'
                                changeValue={ (e) => {
                                    props.setStore.setContactEmail(e.target.value) 
                                    e.target.parentNode.classList.remove('incorrect')
                                }}
                                value={props.store.contact.email}
                                required={true}
                                type='email'
                                checkType='email'
                                name='email'
                                data='contact'
                                minLength={6}
                                maxLength={50}
                                />
                            <Input 
                                id='contact_subject'
                                text='Your subject'
                                changeValue={ (e) => {
                                    props.setStore.setContactSubject(e.target.value) 
                                    e.target.parentNode.classList.remove('incorrect')
                                }}
                                value={props.store.contact.subject}
                                required={false}
                                type='text'
                                checkType='all'
                                name='subject'
                                data='contact'
                                minLength={6}
                                maxLength={50}
                                />
                            <Textarea
                                id='contact_message'
                                text='Your message *'
                                changeValue={ (e) => {
                                    props.setStore.setContactMessage(e.target.value) 
                                    e.target.parentNode.classList.remove('incorrect')
                                } }
                                value={props.store.contact.message}
                                required={true}
                                type='text'
                                checkType='all'
                                name='message'
                                data='contact'
                                minLength={10}
                                maxLength={300}
                                />
                            <button href="" className="link_button" onClick={() => sendMessage()}>Send message</button>      
                        </div>
                        <div className="my-info">
                            <ContactBlock 
                                image={
                                    <svg className="img-phone" xmlns="http://www.w3.org/2000/svg" clipRule="evenodd" viewBox="0 0 508 512.06"><title>Phone</title>
                                        <g>
                                            <path d="M123.43 249.39c15.07,27.16 32.42,53.26 54.98,77.05 22.61,23.95 50.71,45.72 87.14,64.3 2.7,1.32 5.27,1.32 7.55,0.42 3.46,-1.33 6.99,-4.18 10.47,-7.67 2.7,-2.69 6.04,-6.99 9.56,-11.7 13.99,-18.44 31.34,-41.29 55.81,-29.86 0.54,0.25 0.95,0.53 1.49,0.78l81.66 46.96c0.22,0.12 0.53,0.42 0.77,0.53 10.78,7.41 15.2,18.84 15.32,31.76 0,13.18 -4.85,27.98 -11.96,40.5 -9.4,16.5 -23.27,27.43 -39.25,34.69 -15.2,7 -32.13,10.75 -48.4,13.15 -25.55,3.77 -49.47,1.37 -73.94,-6.16 -23.94,-7.42 -48.03,-19.63 -74.37,-35.89l-1.95 -1.25c-12.07,-7.52 -25.12,-15.61 -37.91,-25.13 -46.91,-35.4 -94.65,-86.48 -125.74,-142.71 -26.08,-47.2 -40.32,-98.15 -32.53,-146.73 4.3,-26.63 15.72,-50.84 35.63,-66.82 17.35,-13.98 40.74,-21.64 71.01,-18.96 3.48,0.23 6.58,2.27 8.19,5.24l52.33 88.5c7.67,9.93 8.61,19.75 4.44,29.58 -3.49,8.09 -10.47,15.5 -20.04,22.46 -2.82,2.4 -6.18,4.84 -9.69,7.4 -11.71,8.5 -25,18.3 -20.45,29.85l-0.12 -0.29zm97.51 -42.25c-8.08,-2.08 -12.94,-10.35 -10.85,-18.43 2.09,-8.08 10.35,-12.94 18.43,-10.85 24.51,6.39 47.56,19.66 66.21,37.07 18.76,17.52 33.31,39.41 40.66,62.88 2.48,7.99 -1.98,16.49 -9.96,18.97 -7.98,2.49 -16.49,-1.97 -18.97,-9.95 -5.75,-18.37 -17.33,-35.69 -32.36,-49.73 -15.15,-14.15 -33.68,-24.88 -53.16,-29.96zm2.01 -92.74c-8.25,-1.4 -13.79,-9.24 -12.39,-17.49 1.39,-8.24 9.24,-13.79 17.48,-12.39 46.21,8 90.08,31.46 125.25,64.38 35.19,32.92 61.82,75.41 73.53,121.46 2.06,8.12 -2.85,16.38 -10.97,18.44 -8.12,2.06 -16.38,-2.85 -18.44,-10.97 -10.3,-40.48 -33.75,-77.89 -64.75,-106.89 -30.93,-28.95 -69.38,-49.55 -109.71,-56.54zm9.74 -84.19c-8.31,-0.95 -14.28,-8.47 -13.33,-16.78 0.95,-8.31 8.46,-14.29 16.77,-13.34 64.65,7.57 125.4,37.22 173.49,80.81 48.21,43.69 83.83,101.51 98.02,165.22 1.8,8.14 -3.35,16.22 -11.5,18.02 -8.14,1.8 -16.22,-3.35 -18.02,-11.5 -12.8,-57.45 -45.05,-109.73 -88.77,-149.34 -43.53,-39.45 -98.4,-66.28 -156.66,-73.09z"/>
                                        </g>
                                    </svg>
                                }
                                header='Phone'
                                links={[
                                    {
                                        link: 'tel:+905073423990',
                                        text: '+90 507 342 39 90',
                                        new: false
                                    },
                                ]}
                            />
                            <ContactBlock 
                                image={
                                    <svg className="img-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86"><title>Email</title>
                                        <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/>
                                    </svg>
                                }
                                header='Email'
                                links={[
                                    {
                                        link: 'mailto:max@postnikov.dev',
                                        text: 'max@postnikov.dev',
                                        new: false
                                    },
                                    {
                                        link: 'mailto:maksim.postnikov.it@gmail.com',
                                        text: 'maksim.postnikov.it@gmail.com',
                                        new: false
                                    }

                                ]}
                            />
                            <ContactBlock 
                                image={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.26 122.88"><g><title>Place</title>
                                        <path d="M47.49,116.85c6.31-4.01,11.98-8.87,16.92-14.29c10.73-11.75,17.97-26.11,20.87-40.2c2.88-13.91,1.52-27.54-4.85-38.06 c-1.81-3.02-4.08-5.78-6.78-8.26c-7.74-7.05-16.6-10.41-25.52-10.5c-9.37-0.07-18.87,3.45-27.27,10.14 c-3.58,2.86-6.53,6.15-8.82,9.78c-5.9,9.28-7.69,20.8-5.74,32.85c1.97,12.23,7.78,25.02,17.04,36.61 c6.44,8.08,14.54,15.58,24.18,21.91L47.49,116.85L47.49,116.85z M46.13,21.16c7.05,0,13.45,2.86,18.06,7.49 c4.63,4.63,7.49,11,7.49,18.06c0,7.05-2.86,13.45-7.49,18.06c-4.63,4.63-11,7.49-18.06,7.49c-7.05,0-13.45-2.86-18.06-7.49 c-4.63-4.63-7.49-11-7.49-18.06c0-7.05,2.86-13.45,7.49-18.06C32.7,24.02,39.07,21.16,46.13,21.16L46.13,21.16z M60.51,32.33 c-3.67-3.67-8.78-5.97-14.38-5.97c-5.63,0-10.71,2.27-14.38,5.97c-3.67,3.67-5.97,8.78-5.97,14.38c0,5.63,2.27,10.71,5.97,14.38 c3.67,3.67,8.78,5.97,14.38,5.97c5.63,0,10.71-2.27,14.38-5.97c3.67-3.67,5.97-8.78,5.97-14.38C66.47,41.08,64.21,36,60.51,32.33 L60.51,32.33z M68.52,106.27c-5.6,6.12-12.09,11.61-19.42,16.06c-0.88,0.66-2.13,0.75-3.13,0.11 c-10.8-6.87-19.85-15.13-26.99-24.09C9.15,86.02,2.94,72.34,0.83,59.16c-2.15-13.36-0.14-26.2,6.51-36.68 c2.63-4.13,5.97-7.89,10.07-11.14C26.78,3.88,37.51-0.07,48.17,0c10.28,0.09,20.42,3.9,29.22,11.93c3.09,2.81,5.67,5.99,7.78,9.48 c7.15,11.77,8.69,26.81,5.56,42.01c-3.11,15.04-10.8,30.33-22.18,42.8L68.52,106.27L68.52,106.27z"/>
                                    </g></svg>
                                }
                                header='Address'
                                links={[
                                    {
                                        link: 'https://goo.gl/maps/P4ihh8seuMgREbgf9',
                                        text: 'Sahinler Cad street, 23/29, Mahmutlar, Alanya/Antalya, Turkey',
                                        new: true
                                    },
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


 /*
social


                                        <path d="M297.297,120.952l-6.179-31.012c-2.063-10.321-11.9-18.406-22.398-18.406h-13.36c-0.016,0-0.03,0.002-0.046,0.003
                                            c12.169-6.293,20.516-19.018,20.516-33.668C275.83,16.988,258.893,0,238.074,0c-20.822,0-37.763,16.988-37.763,37.869
                                            c0,14.65,8.348,27.375,20.52,33.668c-0.018,0-0.034-0.003-0.051-0.003h-13.362c-10.494,0-20.332,8.085-22.398,18.411l-1.441,7.236
                                            h-69.019l-1.443-7.242c-2.064-10.32-11.901-18.405-22.396-18.405H77.359c-0.017,0-0.032,0.003-0.049,0.003
                                            c12.17-6.293,20.518-19.018,20.518-33.668C97.828,16.988,80.89,0,60.07,0C39.251,0,22.312,16.988,22.312,37.869
                                            c0,14.65,8.347,27.375,20.518,33.668c-0.016-0.001-0.031-0.003-0.047-0.003H29.42c-10.494,0-20.331,8.085-22.396,18.41l-6.18,31.008
                                            c-0.438,2.203,0.133,4.486,1.557,6.223c1.425,1.736,3.553,2.743,5.799,2.743h37.139l54.743,119.324
                                            c-1.978,2.629-3.405,5.662-4.054,8.922l-6.181,31.011c-0.438,2.202,0.133,4.486,1.557,6.223c1.425,1.736,3.553,2.743,5.799,2.743
                                            h103.736c2.246,0,4.374-1.007,5.799-2.743c1.424-1.736,1.995-4.021,1.557-6.223l-6.18-31.008c-0.648-3.26-2.076-6.294-4.053-8.923
                                            l54.743-119.326h37.137c2.246,0,4.374-1.007,5.798-2.743C297.164,125.438,297.735,123.155,297.297,120.952z M238.074,15
                                            c12.548,0,22.756,10.259,22.756,22.869c0,12.606-10.208,22.862-22.756,22.862c-12.552,0-22.763-10.256-22.763-22.862
                                            C215.311,25.259,225.522,15,238.074,15z M238.074,75.731c4.169,0,8.178-0.691,11.932-1.948l-11.933,11.979L226.134,73.78
                                            C229.89,75.039,233.901,75.731,238.074,75.731z M60.07,15c12.549,0,22.758,10.259,22.758,22.869
                                            c0,12.606-10.209,22.862-22.758,22.862c-12.549,0-22.758-10.256-22.758-22.862C37.312,25.259,47.521,15,60.07,15z M60.07,75.731
                                            c4.171,0,8.182-0.692,11.936-1.95L60.07,85.763l-11.933-11.98C51.892,75.04,55.9,75.731,60.07,75.731z M21.733,92.881
                                            c0.664-3.321,4.328-6.347,7.687-6.347h10.248l15.089,15.148c1.407,1.413,3.319,2.207,5.313,2.207c1.994,0,3.906-0.794,5.314-2.207
                                            l15.091-15.148h10.248c3.358,0,7.022,3.025,7.686,6.342l4.393,22.042H17.342L21.733,92.881z M106.345,283.141l4.395-22.048
                                            c0.658-3.314,4.32-6.333,7.683-6.333h10.247l15.088,15.144c1.407,1.413,3.319,2.207,5.313,2.207c1.994,0,3.905-0.794,5.313-2.206
                                            l15.09-15.145h10.246c3.362,0,7.024,3.019,7.684,6.336l4.393,22.045H106.345z M149.07,228.957
                                            c-12.547,0-22.755-10.259-22.755-22.868c0-12.608,10.208-22.866,22.755-22.866c12.548,0,22.757,10.258,22.757,22.866
                                            C171.827,218.698,161.618,228.957,149.07,228.957z M149.07,243.957c4.17,0,8.181-0.691,11.935-1.949l-11.935,11.977l-11.932-11.977
                                            C140.892,243.266,144.9,243.957,149.07,243.957z M185.533,240.581c-1.883-0.534-3.837-0.821-5.814-0.821h-13.36
                                            c-0.017,0-0.032,0.002-0.049,0.002c12.171-6.293,20.518-19.02,20.518-33.673c0-20.88-16.938-37.866-37.757-37.866
                                            c-20.818,0-37.755,16.986-37.755,37.866c0,14.653,8.347,27.38,20.517,33.673c-0.016,0-0.032-0.002-0.048-0.002h-13.362
                                            c-1.977,0-3.931,0.287-5.813,0.821L61.84,129.918h50.103c2.246,0,4.374-1.007,5.799-2.743c1.424-1.736,1.995-4.02,1.557-6.223
                                            l-1.748-8.771h63.042l-1.747,8.771c-0.439,2.202,0.133,4.485,1.558,6.222c1.424,1.736,3.552,2.743,5.798,2.743h50.102
                                            L185.533,240.581z M195.342,114.918l4.39-22.037c0.664-3.321,4.328-6.347,7.688-6.347h10.248l15.095,15.149
                                            c1.407,1.412,3.319,2.206,5.313,2.206c1.994,0,3.905-0.795,5.313-2.207l15.088-15.148h10.245c3.36,0,7.024,3.024,7.688,6.342
                                            l4.392,22.042H195.342z"/>
 */