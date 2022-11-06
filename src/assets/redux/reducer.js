import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_THEME":
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
        default:
            return {
                ...state   
            }
    }
  };

  export default reducer