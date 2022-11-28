import m1 from '../img/mock-1.jpg'
import m2 from '../img/mock-2.jpg'
import m3 from '../img/mock-3.jpg'

import p1_1 from '../img/photo-1.jpg'
import p1_2 from '../img/photo-2.jpg'
import p1_3 from '../img/photo-me.jpg'
import p1_4 from '../img/photo-side.jpg'

import p2_1 from '../img/photo-1.jpg'
import p2_2 from '../img/photo-2.jpg'
import p2_3 from '../img/photo-me.jpg'
import p2_4 from '../img/photo-side.jpg'




const initialState = {
    theme: 'light',
    nav_ham: '',
    modal: false,
    modalImage: '',
    modalDescr: '',


    portfolios: {
        selected: 0,
        list: [
            {
                name: 'Plenco',
                descr: ' ABC Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: m1,   
                        descr: 'Bla m1'
                    },
                    {
                        link: m2,
                        descr: 'Bla m2'
                    },
                    {
                        link: m3,
                        descr: 'Bla m3'
                    }
                ],
            },
            {
                name: 'P2S Inc',
                descr: 'DEF Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-blaDEF Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p1_1,
                        descr: 'Bla p1_1'
                    },
                    {
                        link: p1_2,
                        descr: 'Bla p1_2'
                    },
                    {
                        link: p1_3,
                        descr: 'Bla p1_3'
                    },
                    {
                        link: p1_4,
                        descr: 'Bla p1_4'
                    },
                    {
                        link: m2,
                        descr: 'Bla m2'
                    },
                ],
            },
            {
                name: 'Techlicious',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p2_4,
                        descr: 'Bla p2_1'
                    },
                    {
                        link: p2_3,
                        descr: 'Bla p2_2'
                    },
                    {
                        link: p2_2,
                        descr: 'Bla p2_3'
                    },
                    {
                        link: p2_1,
                        descr: 'Bla p2_4'
                    }
                ],
            },
            {
                name: 'P & V',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p1_1,
                        descr: 'Bla p2_1'
                    }
                ],
            },
            {
                name: 'Formation',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p1_1,
                        descr: 'Bla p2_1'
                    }
                ],
            },
            {
                name: 'Components',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p1_1,
                        descr: 'Bla p2_1'
                    }
                ],
            },
            {
                name: 'Landing pages',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p1_1,
                        descr: 'Bla p2_1'
                    }
                ],
            },
            {
                name: 'Bike AntiSteal',
                descr: 'GHI Bla-bla-bla-bla-bla -bla-bla-bla-bla-bla -bla-bla-bla-b la-bla-bla-bla -bla-b la-bla-bla-bla- bla-bla-bla',
                images: [
                    {
                        link: p1_1,
                        descr: 'Bla p2_1'
                    }
                ],
            },
        ],




    },

    contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    currentGallery: {
        projectName: '',
        projectDescr: '',
        images: [],
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
            text: '1 Lorem ipsum dolor sit amet  ',
            name: 'Mike Tyson',
            add: 'Client'
        },
        {
            text: '2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saeppsum dolor  porro assumenda reprehenderit in laudantium laboriosam ducimus iure laborum cupiditate consectetur? ',
            name: '2 Mike Tyson',
            add: '2 Client'
        },
        {
            text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.dfsg dg  fdg dfsg   ',
            name: '3 Mike Tyson',
            add: '3 SMB'
        },
        {
            text: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.dfsg dg  fdg dfsg   ',
            name: '4 Mike Tyson',
            add: '4 SMB'
        }, 
    ],
    
}

export default initialState;
