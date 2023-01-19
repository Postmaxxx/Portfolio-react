import { IState } from 'src/models';
import { Action } from 'src/models';
import { actionList } from '../../models';

import initialState from './initialState';

const reducer = function(state: IState = initialState, action: Action<any>): IState {
    switch (action.type) {
        case actionList.SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case actionList.SET_NAV_OPEN:
            return {
                ...state,
                nav_ham: 'nav_opened'
            }
        case actionList.SET_NAV_CLOSE:
            return {
                ...state,
                nav_ham: ''
            }
        case actionList.SET_CONTACT_NAME:
            return { 
                ...state,
                contact: {
                    ...state.contact,
                    name: action.payload
                }
            }
        case actionList.SET_CONTACT_EMAIL:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    email : action.payload
                }
            }
        case actionList.SET_CONTACT_SUBJECT:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    subject : action.payload
                }
            }
        case actionList.SET_CONTACT_MESSAGE:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    message : action.payload
                }
            }
        case actionList.SET_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case actionList.SET_MODAL_IMAGE:
            return {
                ...state,
                modalImage: action.payload
            }
        case actionList.SET_MODAL_DESCR:
            return {
                ...state,
                modalDescr: action.payload
            }
        case actionList.SET_MODAL_LINK:
            return {
                ...state,
                modalLink: action.payload
            }
        case actionList.SET_MODALMSG:
            return {
                ...state,
                modalMsg: {
                    ...state.modalMsg,
                    active: action.payload
                }
            }
        case actionList.SET_MODALMSG_HEADER:
            return {
                ...state,
                modalMsg: {
                    ...state.modalMsg,
                    header: action.payload
                }
            }
        case actionList.SET_MODALMSG_TEXT:
            return {
                ...state,
                modalMsg: {
                    ...state.modalMsg,
                    text: action.payload
                }
            }
        case actionList.SET_MODALMSG_BTNTEXT:
            return {
                ...state,
                modalMsg: {
                    ...state.modalMsg,
                    btnText: action.payload
                }
            }
        case actionList.SET_SELECTED_PORTFOLIO:
            return {
                ...state,
                portfolios: {
                    ...state.portfolios,
                    selected: action.payload,
                } 
            }
        default:
            return {
                ...state   
            }
    }
  };

  export default reducer