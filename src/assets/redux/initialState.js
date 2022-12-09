import sidePhoto from '../img/me_side.jpg'
import resumeDoc from '../docs/resume.pdf';

import photoNight from '../img/me_night.jpg';
import photoNight750 from '../img/me_night_750.jpg';
import photoNight500 from '../img/me_night_500.jpg';
import photoNight350 from '../img/me_night_350.jpg';
import photoDay from '../img/me_day.jpg';
import photoDay750 from '../img/me_day_750.jpg';
import photoDay500 from '../img/me_day_500.jpg';
import photoDay350 from '../img/me_day_350.jpg';

import plenco_1 from '../img/portfolio/plenco/1.jpg'
import plenco_1_big from '../img/portfolio/plenco/1_big.jpg'
import plenco_1_small from '../img/portfolio/plenco/1_small.jpg'
import plenco_2 from '../img/portfolio/plenco/2.jpg'
import plenco_2_big from '../img/portfolio/plenco/2_big.jpg'
import plenco_2_small from '../img/portfolio/plenco/2_small.jpg'
import plenco_3 from '../img/portfolio/plenco/3.jpg'
import plenco_3_big from '../img/portfolio/plenco/3_big.jpg'
import plenco_3_small from '../img/portfolio/plenco/3_small.jpg'
import plenco_4 from '../img/portfolio/plenco/4.jpg'
import plenco_4_big from '../img/portfolio/plenco/4_big.jpg'
import plenco_4_small from '../img/portfolio/plenco/4_small.jpg'
import plenco_5 from '../img/portfolio/plenco/5.jpg'
import plenco_5_big from '../img/portfolio/plenco/5_big.jpg'
import plenco_5_small from '../img/portfolio/plenco/5_small.jpg'
import plenco_6 from '../img/portfolio/plenco/6.jpg'
import plenco_6_big from '../img/portfolio/plenco/6_big.jpg'
import plenco_6_small from '../img/portfolio/plenco/6_small.jpg'
import plenco_7 from '../img/portfolio/plenco/7.jpg'
import plenco_7_big from '../img/portfolio/plenco/7_big.jpg'
import plenco_7_small from '../img/portfolio/plenco/7_small.jpg'
import plenco_8 from '../img/portfolio/plenco/8.jpg'
import plenco_8_big from '../img/portfolio/plenco/8_big.jpg'
import plenco_8_small from '../img/portfolio/plenco/8_small.jpg'
import plenco_9 from '../img/portfolio/plenco/9.jpg'
import plenco_9_big from '../img/portfolio/plenco/9_big.jpg'
import plenco_9_small from '../img/portfolio/plenco/9_small.jpg'
import plenco_10 from '../img/portfolio/plenco/10.jpg'
import plenco_10_big from '../img/portfolio/plenco/10_big.jpg'
import plenco_10_small from '../img/portfolio/plenco/10_small.jpg'

import plenco_desktop_xd from '../img/portfolio/plenco/desktop_xd.jpg'
import plenco_desktop_xd_big from '../img/portfolio/plenco/desktop_xd_big.jpg'
import plenco_desktop_xd_small from '../img/portfolio/plenco/desktop_xd_small.jpg'
import plenco_mobile_xd from '../img/portfolio/plenco/mobile_xd.jpg'
import plenco_mobile_xd_big from '../img/portfolio/plenco/mobile_xd_big.jpg'
import plenco_mobile_xd_small from '../img/portfolio/plenco/mobile_xd_small.jpg'




let portfolioPath = 'http://127.0.0.1:8887/';

const initialState = {
    theme: 'light',
    nav_ham: '',
    modal: false,
    modalImage: '',
    modalDescr: '',
    modalLink: '',
    imgLoaded: false,
    skillFillSpeed: 3,//ms
    resumeDoc: resumeDoc,
    me: [
        {
            descr: 'Full Name',
            value: 'Max Postnikov'
        },
        {
            descr: 'Age',
            value: '39',
        },
        {
            descr: 'Nationality',
            value: 'Russian'
        },

        {
            descr: 'Languages',
            value: 'English, Russian'
        },

        {
            descr: 'Adress',
            value: 'Alanya, Turkey'
        },
        {
            descr: 'Freelance',
            value: 'Available'
        },
    ],
    skills: [
        {
            name: 'HTML5',
            percent: 95
        },
        {
            name: 'CSS3',
            percent: 90
        },
        {
            name: 'JavaScript',
            percent: 90
        },
        {
            name: 'React',
            percent: 75
        },
        {
            name: 'Bootstrap5',
            percent: 70
        },
        {
            name: 'Webpack',
            percent: 80
        },
        {
            name: 'GIT',
            percent: 85
        },
        {
            name: 'Docker',
            percent: 70
        },
        {
            name: 'Tailwind',
            percent: 90
        },
        {
            name: 'Gulp',
            percent: 95
        },
        {
            name: 'BEM',
            percent: 95
        },
        {
            name: 'Scrum',
            percent: 80
        },
    ],
    workExperience: [
        {
            date: '2020 - Present',
            header: 'Web Developer',
            subHeader: 'WiseUpStudio',
            text: 'Creating sites using design templates, creating specific interactive components, code review, bugs fixing. Applying frameworks (Bootstrap, Tailwind, React) as well as using pure Html+Css+Js. Following best practices using BEM, Git, Webpack and Mobile First application principles.',
            link: 'https://www.wiseupstudio.com/',
        },
        {
            date: '2019 - 2020',
            header: 'Junior Frontend Developer',
            subHeader: 'ServiceCom',
            text: 'Creating sites using pixel-perfect design, communication with clients.',
            link: 'http://servicecom38.ru/',
        },
        {
            date: '2015 - 2019',
            header: 'Principal System Engineer',
            subHeader: 'ServiceCom',
            text: 'Planning strategy of IT development, configuration of security settings and access permissions for individuals and groups, development and implement the complex virus malware protection strategy; communication with third party System Engineer Groups for creation of optimal solutions for business support.',
            link: 'http://servicecom38.ru/',
        },
        {
            date: '2011 - 2015',
            header: 'System Engineer',
            subHeader: 'Ecostroy LTD',
            text: 'Creatively designed and supported leading edge IT solutions comprising multiple application servers, network equipments, storage architecture, network monitoring and backup/disaster recovery strategies. Additional responsibilities included development of IT strategies, assist upper management in planning/upgrading latest technology trends and maintain positive business relationship with technology vendors and customers.',
            link: 'https://uroven-sk.ru/',
        },
    ],
    education: [
        {
            date: '2022',
            header: 'AWS',
            subHeader: 'AWS Cloud Practitioner',
            text: 'Improving my knowledge by learning cloud technologies',
            link: 'https://aws.amazon.com/',
        },
        {
            date: '2019',
            header: 'SkillFactory Education Platform',
            subHeader: 'Frontend Developer',
            text: 'Finished 9 month intense online courses with final team project. First place in the year team competition.',
            link: 'https://skillfactory.ru'
        },
        {
            date: '2000 - 2005',
            header: 'Baikal State University of Economics And Law',
            subHeader: 'IT in Economics',
            text: 'Master’s Degree, Major in Computer Information Systems. Represented university in ACM International Collegiate Programming Contest (twice)',
            link: 'http://bgu.ru/eng/',
        },
    ],
    imagesMe: {
        side: sidePhoto,
        day: {
            descr: 'Just me in the daytime',
            images: [
                {
                    width: 350,
                    image: photoDay350,
                },
                {
                    width: 500,
                    image: photoDay500,
                },
                {
                    width: 750,
                    image: photoDay750,
                },
                {
                    width: 10000,
                    image: photoDay,
                },
            ],
        },
        night: {
            descr: 'Just me at night',
            images: [
                {
                    width: 350,
                    image: photoNight350,
                },
                {
                    width: 500,
                    image: photoNight500,
                },
                {
                    width: 750,
                    image: photoNight750,
                },
                {
                    width: 10000,
                    image: photoNight,
                },
            ],
        },

    },

    portfolios: {
        selected: 0,
        //slideIndex: 0,
        list: [
            {
                name: 'Plenco',
                descr: 'Created frontend for Plenco company based on Bootstrap 5 using provided design in AdobeXD. More than 81 pages, accordions, dropdown lists, animation, adaptive design, galleries, carousels, preloaders and so on.\n Stack: Gulp, Twig, Bootstrap 5, Tailwind, JS, Scss',
                link: 'https://www.plenco.com',
                images: [
                    {
                        //image: plenco_dt,   
                        descr: 'Design templates for desktop version',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image:plenco_desktop_xd_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_desktop_xd_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_desktop_xd,
                            },
                        ]
                    },
                    {
                        //image: plenco_mob,
                        descr: 'Design templates for mobile version',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_mobile_xd_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_mobile_xd_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_mobile_xd,
                            },
                        ]
                    },
                    {
                        //image: plenco_1,
                        descr: 'Home page',
                        link: portfolioPath + 'plenco/home.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_1_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_1_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_1,
                            },
                        ]
                    },
                    {
                        //image: plenco_2,
                        descr: 'Dropdown menu for quick application selection',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_2_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_2_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_2,
                            },
                        ]
                    },
                    {
                        //image: plenco_3,
                        descr: 'Certificates & latest news',
                        link: portfolioPath + 'plenco/certifications.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_3_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_3_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_3,
                            },
                        ]
                    },
                    {
                       // image: plenco_4,
                        descr: 'Mobile menu',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_4_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_4_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_4,
                            },
                        ]
                    },
                    {
                       // image: plenco_5,
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ]
                    },
                    {
                      //  image: plenco_6,
                        descr: 'Related accordions',
                        link: portfolioPath + 'plenco/oil-gas.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_6_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_6_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_6,
                            },
                        ]
                    },
                    {
                       // image: plenco_7,
                        descr: 'News carousel',
                        link: portfolioPath + 'plenco/news-blog-detail.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_7_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_7_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_7,
                            },
                        ]
                    },
                    {
                        //image: plenco_8,
                        descr: 'News block with tags and categories',
                        link: portfolioPath + 'plenco/news-blog.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_8_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_8_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_8,
                            },
                        ]
                    },
                    {
                       // image: plenco_9,
                        descr: 'Search with filters',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_9_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_9_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_9,
                            },
                        ]
                    },
                    {
                        //image: plenco_10,
                        descr: 'Mobile navigation',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_10_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_10_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_10,
                            },
                        ]
                    },
                ],
            },
            {
                name: 'P2S Inc',
                descr: 'DEF Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-blaDEF Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.p2sinc.com',
                images: [
                    {
                        // image: plenco_5,
                         descr: 'Accordions',
                         link: portfolioPath + 'plenco/pn-rr-app.html',
                         images: [
                             {
                                 width: 550,
                                 height: 400,
                                 image: plenco_5_small,
                             },
                             {
                                 width: 1075,
                                 height: 440,
                                 image: plenco_5_big,
                             },
                             {
                                 width: 10000,
                                 height: 10000,
                                 image: plenco_5,
                             },
                         ]
                     },
                    
                    {
                        //image: plenco_1,
                        descr: 'Home page',
                        link: portfolioPath + 'plenco/home.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_1_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_1_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_1,
                            },
                        ]
                    },
                    {
                        //image: plenco_2,
                        descr: 'Dropdown menu for quick application selection',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_2_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_2_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_2,
                            },
                        ]
                    },
                    {
                        //image: plenco_3,
                        descr: 'Certificates & latest news',
                        link: portfolioPath + 'plenco/certifications.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_3_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_3_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_3,
                            },
                        ]
                    },
                    {
                        //image: plenco_dt,   
                        descr: 'Design templates for desktop version',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image:plenco_desktop_xd_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_desktop_xd_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_desktop_xd,
                            },
                        ]
                    },
                    {
                       // image: plenco_4,
                        descr: 'Mobile menu',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_4_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_4_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_4,
                            },
                        ]
                    },
                    {
                        //image: plenco_mob,
                        descr: 'Design templates for mobile version',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_mobile_xd_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_mobile_xd_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_mobile_xd,
                            },
                        ]
                    },
                    {
                      //  image: plenco_6,
                        descr: 'Related accordions',
                        link: portfolioPath + 'plenco/oil-gas.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_6_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_6_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_6,
                            },
                        ]
                    },
                    {
                       // image: plenco_7,
                        descr: 'News carousel',
                        link: portfolioPath + 'plenco/news-blog-detail.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_7_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_7_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_7,
                            },
                        ]
                    },
                    {
                        //image: plenco_8,
                        descr: 'News block with tags and categories',
                        link: portfolioPath + 'plenco/news-blog.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_8_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_8_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_8,
                            },
                        ]
                    },
                    {
                       // image: plenco_9,
                        descr: 'Search with filters',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_9_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_9_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_9,
                            },
                        ]
                    },
                    {
                        //image: plenco_10,
                        descr: 'Mobile navigation',
                        link: '',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_10_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_10_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_10,
                            },
                        ]
                    },
                ],
            },
            {
                name: 'Techlicious',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.techlicious.com',
                images: [
                    {
                        //mock
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ],
                    },
                ]
            },
            {
                name: 'P & V',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.google.com',
                images: [
                    {
                        //mock
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Formation',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.google.com',
                images: [
                    {
                        //mock
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Components',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.google.com',
                images: [
                    {
                        //mock
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Landing pages',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.google.com',
                images: [
                    {
                        //mock
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Bike AntiSteal',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                link: 'https://www.google.com',
                images: [
                    {
                        //mock
                        descr: 'Accordions',
                        link: portfolioPath + 'plenco/pn-rr-app.html',
                        images: [
                            {
                                width: 550,
                                height: 400,
                                image: plenco_5_small,
                            },
                            {
                                width: 1075,
                                height: 440,
                                image: plenco_5_big,
                            },
                            {
                                width: 10000,
                                height: 10000,
                                image: plenco_5,
                            },
                        ],
                    },
                ]
            },
        ],
    },
    contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    pages: [
        {
            link: '/home',
            text: 'home'
        },
        {
            link: '/about',
            text: 'about'
        },
        {
            link: '/resume',
            text: 'resume'
        },
        {
            link: '/portfolio',
            text: 'portfolio'
        },
        {
            link: '/contact',
            text: 'contact'
        },

    ],
    reviews: [
        {
            text: 'Stick to deadlines, feeling of design concept and ease of communication - Max has everything we need for productive work.',
            name: 'Oleg Abramov',
            add: 'WiseUpStudio'
        },
        {
            text: 'One of the most responsible person we had worked in web developement. Meticulous attention to every single detail is the reason for acceptance of the project from the first time.',
            name: 'Name Family',
            add: 'Plenco'
        },
        {
            text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.dfsg dg  fdg dfsg   ',
            name: 'Nina Ptichkina',
            add: 'Techlicious'
        },
        {
            text: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.dfsg dg  fdg dfsg   ',
            name: 'Designer',
            add: 'P2S Inc.'
        }, 
    ],
    contacts: {
        phone: [
            {
                link: 'tel:+905073423990',
                text: '+90 507 342 39 90',
                newWindow: false
            },
        ],
        email: [
            {
                link: 'mailto:max@postnikov.dev',
                text: 'max@postnikov.dev',
                newWindow: false
            },
            {
                link: 'mailto:maksim.postnikov.it@gmail.com',
                text: 'maksim.postnikov.it@gmail.com',
                nenewWindoww: false
            },
        ],
        address: [
            {
                link: 'https://goo.gl/maps/BoFoy6a1CLfooT768',
                text: 'Mahmutlar, Alanya/Antalya, Turkey',
                newWindow: true
            },
        ],
    }
    
}

export default initialState;
