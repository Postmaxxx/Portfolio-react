export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme
})

export const setNavOpen = () => ({
    type: 'SET_NAV_OPEN',
})

export const setNavClose = () => ({
    type: 'SET_NAV_CLOSE',
})


export const setContactName = (text) => ({
    type: 'SET_CONTACT_NAME',
    payload: text
})

export const setContactEmail = (text) => ({
    type: 'SET_CONTACT_EMAIL',
    payload: text
})

export const setContactSubject = (text) => ({
    type: 'SET_CONTACT_SUBJECT',
    payload: text
})

export const setContactMessage = (text) => ({
    type: 'SET_CONTACT_MESSAGE',
    payload: text
})


export const setModal = (status) => ({
    type: 'SET_MODAL',
    payload: status
})


export const setModalImage = (url) => ({
    type: 'SET_MODAL_IMAGE',
    payload: url
})

export const setModalDescr = (text) => ({
    type: 'SET_MODAL_DESCR',
    payload: text
})

export const setModalLink = (link) => ({
    type: 'SET_MODAL_LINK',
    payload: link
})

export const setModalMsgVisible = (visible) => ({
    type: 'SET_MODALMSG',
    payload: visible
})

export const setModalMsgHeader = (text) => ({
    type: 'SET_MODALMSG_HEADER',
    payload: text
})

export const setModalMsgText = (text) => ({
    type: 'SET_MODALMSG_TEXT',
    payload: text
})

export const setModalMsgBtnText = (text) => ({
    type: 'SET_MODALMSG_BTNTEXT',
    payload: text
})


export const setCurrentGallery = (gallery) => ({
    type: 'SET_CURRENT_GALLERY',
    payload: gallery
})


export const setSelectedPortfolio = (number) => ({
    type: 'SET_SELECTED_PORTFOLIO',
    payload: number
})


export const setImgLoaded = (isLoaded) => ({
    type: 'SET_IMG_LOADED',
    payload: isLoaded
})
/*
export const setSlideIndex = (index) => ({
    type: 'SET_SLIDE_INDEX',
    payload: index
})
*/