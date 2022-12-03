import { createStore } from 'redux';
import reducer from '../../assets/redux/reducer';

let store = createStore(reducer);

export default store