import { createStore } from 'redux';
import reducer from './reducer'
import { IState } from 'src/models';
 
let store: IState = createStore(reducer);
 
export default store 