import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setTheme":
            return {
                ...state,
                theme: action.payload
            }
        case "setTemp":
            return {
                ...state,
                temp: action.payload
            }
        default:
            return {
                ...state   
            }
    }
  };

  export default reducer