import { MouseEventHandler } from "react";
import { AnyAction } from "redux";
import { TTheme } from "./components/theme_switcher/theme-switcher";

export type IPropsJSX = (props: IProps) => JSX.Element
export type INoPropsJSX = () => JSX.Element
/*
export interface IPropsJSX2 {
    (props: IProps): JSX.Element
} 
*/
export type EmptyVoid = () => void

export interface Action<T> {
    type: string;
    payload?: T; 
}

//type Tinterf = <T>(payload: T) => Action<T>
/*
const t = <T>(payload? : T): Action<T> => {
    return {
        type: '',
        payload
    }
}
*/

//export type Predicate = <T extends string>(p?: T) => Action<T>;



export interface ISetStore {
    [key: string]: <T>(payload?: any) => Action<T> //Change any to T
    //[key: string]: Predicate
}


export interface IProps {
    store: IState
    setStore: ISetStore
    children?: JSX.Element
}


export interface IStore {
    store: IState
}



export interface IActionList {
    [key:string]: string
}

export interface IDispatch {
    <T extends AnyAction>(action: T): T
}


export interface IMapStateToProps {
    (store: IState): {store: IState}
}

export interface IMapdispatchToProps {
    (dispatch: IDispatch): {setStore: ISetStore}
}

//export type TTheme = 'dark' | 'light'

export const actionList: IActionList = {
	SET_THEME: "SET_THEME",
	SET_NAV_OPEN: "SET_NAV_OPEN",
	SET_NAV_CLOSE: "SET_NAV_CLOSE",
	SET_CONTACT_NAME: "SET_CONTACT_NAME",
	SET_CONTACT_EMAIL: "SET_CONTACT_EMAIL",
	SET_CONTACT_SUBJECT: "SET_CONTACT_SUBJECT",
	SET_CONTACT_MESSAGE: "SET_CONTACT_MESSAGE",
	SET_MODAL: "SET_MODAL",
	SET_MODAL_IMAGE: "SET_MODAL_IMAGE",
	SET_MODAL_DESCR: "SET_MODAL_DESCR",
	SET_MODAL_LINK: "SET_MODAL_LINK",
	SET_MODALMSG: "SET_MODALMSG",
	SET_MODALMSG_HEADER: "SET_MODALMSG_HEADER",
	SET_MODALMSG_TEXT: "SET_MODALMSG_TEXT",
	SET_MODALMSG_BTNTEXT: "SET_MODALMSG_BTNTEXT",
	SET_SELECTED_PORTFOLIO: "SET_SELECTED_PORTFOLIO",
	SET_IMG_LOADED: "SET_IMG_LOADED"
};



export type MeInfo = {
    descr: string
    value: string
}

export type MySkill = {
    name: string
    percent: number
}

export type WorkEducationItem = {
    date: string
    header: string
    subHeader: string
    text: string
    link: string
}


export type ImageMe = {
    width: number
    image: string
}


export type ProjectItemImageItem = {
    width: number
    height: number
    image: string 
}


type ProjectItemImagesImage = {
    descr: string
    link: string
    images: Array<ProjectItemImageItem>
}


export type ProjectItemListItem = {
    name: string
    descr: string
    link: string
    images: Array<ProjectItemImagesImage>
}


export type PageItem = {
    link: string
    text: string
}

export type ReviewItem = {
    text: string
    name: string
    add: string
}

export type ContactItem = {
    link: string
    text:string
    newWindow: boolean
}

export interface IState extends IProps {
    theme: TTheme
    nav_ham: string
    modal: boolean
    modalImage: string 
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
    skills: Array<MySkill>
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
    getState: any
    dispatch :any
    subscribe : any
    replaceReducer: any
    [Symbol.observable] : any
}


export interface ISliderOptions {
    lazyLoad?: boolean
    fixedWidth?: string
    updateOnMove?: boolean
    type? : string
    perPage?: number
    gap?   : string
    breakpoints?: {
        [key:number]: {
            perPage?: number
            gap?   : string
            wheel?: boolean
        },
    },
    perMove?: number
    pagination?: boolean
    arrows?: boolean
    drag?: boolean
    speed?: number
    snap?: boolean
    wheel?: boolean
    wheelSleep?: number
    autoplay?: boolean
    interval?: number
    pauseOnHover?: boolean
    rewind?: boolean
}


type InputCheck = {
    text: string
    type: string
    minLength: number
    maxLength: number
}

export interface IInputCheck {
    (props: InputCheck): boolean | string
} 


type message = {
    header: string
    text: string
    buttonText: string
    buttonClickAction: MouseEventHandler
}

export interface IMessage {
    (props: message): JSX.Element
}

export interface IRemoveEventListener {
    (): ReturnType<typeof document.removeEventListener>
}

/*

export interface IThemeSwitcherProps {
    themeSwitcher: string
    star: FC<SVGProps<SVGSVGElement>>
    cloud: FC<SVGProps<SVGSVGElement>>
    width: number
    height: number
    circleSize: number
    duration: number
    theme: string,
    numberOfStars: number
    nodeForTheme: HTMLElement
    saveState: string
}
*/

