export interface Action<T> {
    type: string;
    payload?: T; 
}

export interface ISetStore {
    [key: string]: <T>(payload?: T) => Action<T>
    //[key:string]: <T>(payload?: T) => {type: string, payload?: T}
}


export interface IProps {
    store: IState
    setStore: ISetStore
}






export interface IActionList {
    [key:string]: string
}

export const actionList: IActionList = {
    SET_THEME: 'SET_THEME',
    SET_NAV_OPEN: 'SET_NAV_OPEN',
    SET_NAV_CLOSE: 'SET_NAV_CLOSE',
    SET_CONTACT_NAME: 'SET_CONTACT_NAME',
    SET_CONTACT_EMAIL: 'SET_CONTACT_EMAIL',
    SET_CONTACT_SUBJECT: 'SET_CONTACT_SUBJECT',
    SET_CONTACT_MESSAGE: 'SET_CONTACT_MESSAGE',
    SET_MODAL: 'SET_MODAL',
    SET_MODAL_IMAGE: 'SET_MODAL_IMAGE',
    SET_MODAL_DESCR: 'SET_MODAL_DESCR',
    SET_MODAL_LINK: 'SET_MODAL_LINK',
    SET_MODALMSG: 'SET_MODALMSG',
    SET_MODALMSG_HEADER: 'SET_MODALMSG_HEADER',
    SET_MODALMSG_TEXT: 'SET_MODALMSG_TEXT',
    SET_MODALMSG_BTNTEXT: 'SET_MODALMSG_BTNTEXT',
    SET_SELECTED_PORTFOLIO: 'SET_SELECTED_PORTFOLIO',
    SET_IMG_LOADED: 'SET_IMG_LOADED'
}



type MeInfo = {
    descr: string
    value: string
}

type MeSkills = {
    name: string
    percent: number
}

type WorkEducationItem = {
    date: string
    header: string
    subHeader: string
    text: string
    link: string
}


type ImageMe = {
    width: number
    image: string //!
}


type ProjectItemImageItem = {
    width: number
    height: number
    image: string //!
}


type ProjectItemImagesImage = {
    descr: string
    link: string
    images: Array<ProjectItemImageItem>
}


type ProjectItemListItem = {
    name: string
    descr: string
    link: string
    images: Array<ProjectItemImagesImage>
}


type PageItem = {
    link: string
    text: string
}

type ReviewItem = {
    text: string
    name: string
    add: string
}

type ContactItem = {
    link: string
    text:string
    newWindow: boolean
}

export interface IState {
    theme: string
    nav_ham: string
    modal: boolean
    modalImage: string //1
    modalDescr: string
    modalLink: string
    imgLoaded: boolean
    modalMsg: {
        active: boolean
        header: string
        text: string
        btnText: string
    }
    skillFillSpeed: number
    resumeDoc: string
    me: Array<MeInfo>
    skills: Array<MeSkills>
    workExperience: Array<WorkEducationItem>
    education: Array<WorkEducationItem>
    imagesMe: {
        side: string
        day: {
            descr: string
            images: Array<ImageMe>
        }
        night: {
            descr: string
            images: Array<ImageMe>
        }
    }
    portfolios: {
        selected: number
        list: Array<ProjectItemListItem>
    }
    contact: {
        name: string
        email: string
        subject: string
        message: string
    }
    pages: Array<PageItem>
    reviews: Array<ReviewItem>
    contacts: {
        phone: Array<ContactItem>
        email: Array<ContactItem>
        address: Array<ContactItem>
    }
}



