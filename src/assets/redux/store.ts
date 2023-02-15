import { createStore } from "redux";
import reducer from "./reducer";
import { IState } from "src/models";
 
const store: IState = createStore(reducer);
 
export default store; 