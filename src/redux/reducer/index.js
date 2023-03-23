import { combineReducers } from "redux";
import CounterReducer from "./counter/CounterReducer";


const RootReducer = combineReducers({
    CounterReducer: CounterReducer,

});

export default RootReducer;