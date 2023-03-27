import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import userReducers from "./reducers/userReducer"
import rootsaga from "./saga/rootSaga"
import todoReducers from "./reducers/todoReducer"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        user:userReducers,
        todo:todoReducers
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

sagaMiddleware.run(rootsaga)