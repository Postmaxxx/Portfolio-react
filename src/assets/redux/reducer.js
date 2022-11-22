import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_THEME":
            //localStorage.setItem('theme', action.payload)
            return {
                ...state,
                theme: action.payload
            }
        case "SET_NAV_OPEN":
            return {
                ...state,
                nav_ham: 'nav_opened'
            }
        case "SET_NAV_CLOSE":
            return {
                ...state,
                nav_ham: ''
            }
        case "SET_CONTACT_NAME":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    name : action.payload
                }
            }
        case "SET_CONTACT_EMAIL":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    email : action.payload
                }
            }
        case "SET_CONTACT_SUBJECT":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    subject : action.payload
                }
            }
        case "SET_CONTACT_MESSAGE":
            return {
                ...state,
                contact: {
                    ...state.contact,
                    message : action.payload
                }
            }
        case "SET_MODAL":
            return {
                ...state,
                modal: action.payload
            }
        case "SET_CURRENT_GALLERY":
            return {
                ...state,
                currentGallery: action.payload,
            }
        case "SET_SPLIDEMAX_EXPAND":
            return {
                ...state,
                splideMaxExpand: action.payload,
            }

        default:
            return {
                ...state   
            }
    }
  };

  export default reducer