
import { select, put, takeLatest, all } from 'redux-saga/effects';

function* helloSaga() {
    console.log('Hello Sagas!')
}


function* actionWatcher() {
    yield takeLatest('COUNT_INCRESE', helloSaga);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
