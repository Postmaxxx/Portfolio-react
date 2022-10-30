import initialStore from './initialStore';

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case "setTheme":
            store.theme = action.payload
            return store;
        default:
            return store;
    }
  };

  export default reducer