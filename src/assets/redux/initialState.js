const initialState = {
    theme: 'light',
    nav_ham: '',
    modal: false,

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
