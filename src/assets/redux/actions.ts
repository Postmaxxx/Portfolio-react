import { Action } from 'src/models';
import { actionList } from 'src/models';


export const setTheme = <T extends string>(theme: T): {type: string, payload: T} => ({
    type: actionList.SET_THEME, 
    payload: theme,
})


export const setNavOpen = (): Action => ({
    type: actionList.SET_NAV_OPEN,
})

export const setNavClose = (): Action => ({
    type: actionList.SET_NAV_CLOSE,
})


export const setContactName = (text: string): Action => ({
    type: actionList.SET_CONTACT_NAME,
    payload: text
})

export const setContactEmail = (text: string): Action => ({
    type: actionList.SET_CONTACT_EMAIL,
    payload: text
})

export const setContactSubject = (text: string): Action => ({
    type: actionList.SET_CONTACT_SUBJECT,
    payload: text
})

export const setContactMessage = (text: string): Action => ({
    type: actionList.SET_CONTACT_MESSAGE,
    payload: text
})


export const setModal = (status: boolean): Action => ({
    type: actionList.SET_MODAL,
    payload: status
})


export const setModalImage = (url: string): Action => ({
    type: actionList.SET_MODAL_IMAGE,
    payload: url
})

export const setModalDescr = (text: string): Action => ({
    type: actionList.SET_MODAL_DESCR,
    payload: text
})

export const setModalLink = (link: string): Action => ({
    type: actionList.SET_MODAL_LINK,
    payload: link
})

export const setModalMsgVisible = (visible :boolean): Action => ({
    type: actionList.SET_MODALMSG,
    payload: visible
})

export const setModalMsgHeader = (text: string): Action => ({
    type: actionList.SET_MODALMSG_HEADER,
    payload: text
})

export const setModalMsgText = (text: string): Action => ({
    type: actionList.SET_MODALMSG_TEXT,
    payload: text
})

export const setModalMsgBtnText = (text: string): Action => ({
    type: actionList.SET_MODALMSG_BTNTEXT,
    payload: text
})

export const setSelectedPortfolio = (number: number): Action => ({
    type: actionList.SET_SELECTED_PORTFOLIO,
    payload: number
})


export const setImgLoaded = (isLoaded: boolean): Action => ({
    type: actionList.SET_IMG_LOADED,
    payload: isLoaded
})
