
import { applyMiddleware, createStore, } from "redux";
import RootReducer from './reducer/index';
import createSagaMiddleware from 'redux-saga'
import rootSaga, { helloSaga } from "./saga/Sagas";

const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            // console.log('result...>', result);
        }
    }
}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(logAction, sagaMiddleware));
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

export default store;