import { call, all } from 'redux-saga/effects'
import userSaga from './userSaga'
import todoSaga from './TodoSaga'


export const rootsaga = function*(){
    yield all([
        call(userSaga),
        call(todoSaga)
    ])
}


export default rootsaga