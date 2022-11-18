const siteData = {
    skillFillSpeed: 3,//ms
    me: [
        {
            descr: 'Full Name',
            value: 'Max Postnikov'
        },
        {
            descr: 'Age',
            value: new Date().getFullYear() - 1983,
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
    ],
    workExperience: [
        {
            date: '2021 - Present',
            header: 'Frontend Web Developer',
            subHeader: 'WiseUpStudio',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus dolore consequuntur recusandae aut ut accusamus pariatur ad vero nam!',
        },
        {
            date: '2019 - 2021',
            header: 'Frontend Web Developer',
            subHeader: 'ServiceCom',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus dolore consequuntur recusandae aut ut accusamus pariatur ad vero nam!',
        },
        {
            date: '2018 - 2019',
            header: 'Junior Frontend Web Developer',
            subHeader: 'ServiceCom',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus dolore consequuntur recusandae aut ut accusamus pariatur ad vero nam!',
        },
    ],
    education: [
        {
            date: '2022',
            header: 'AWS',
            subHeader: 'AWS Cloud Practitioner',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus dolore consequuntur recusandae aut ut accusamus pariatur ad vero nam!',
        },
        {
            date: '2018',
            header: 'SkillFactory Education Platform',
            subHeader: 'Frontend Developer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus dolore consequuntur recusandae aut ut accusamus pariatur ad vero nam!',
        },
        {
            date: '2000 - 2005',
            header: 'Baikal State University of Economics And Law',
            subHeader: 'IT in Economics',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus dolore consequuntur recusandae aut ut accusamus pariatur ad vero nam!',
        },
    ],
    gallery: [
        {   
            projectName: '',
            projectDescr: '',
            images: [
                {
                    url: "../img/photo-2.jpg",
                    name: "Me-2",
                    descr: "",
                    link: "google.com",
                },
                {
                    url: "../img/photo-1.jpg",
                    name: "Me-1",
                    descr: "",
                    link: "google.com",
                },
                {
                    url: "../img/photo-side.jpg",
                    name: "Me-side",
                    descr: "",
                    link: "google.com",
                },

            ],
        },
        {   
            projectName: 'Plenco',
            projectDescr: 'Plenko bla-bla-bla ',
            images: [
                {
                    url: "../img/mock-1.jpg",
                    name: "Mock-1-name",
                    descr: "Mock-1-descr",
                    link: "google.com",
                },
                {
                    url: "../img/mock-2.jpg",
                    name: "Mock-2-name",
                    descr: "Mock-2-descr",
                    link: "google.com",
                },
                {
                    url: "../img/mock-3.jpg",
                    name: "Mock-3-name",
                    descr: "Mock-3-descr",
                    link: "google.com",
                },

            ],
        },
    ]
}


export default siteData;