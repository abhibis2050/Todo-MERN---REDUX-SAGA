import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { createTodo_api, deleteTodo_api, getTodo_api } from "../action";
import { createTodo, deleteTodos, getTodos } from "../reducers/todoReducer";

function* addTodo(action) {
  try {
    console.log(action.payload, "<------ action.payload");

    const todoData = yield call(createTodo_api, action.payload);
    console.log(todoData, "<------ todo Data todoSaga");

    yield put(createTodo(todoData));
     if(todoData.status===true){
        // yield getTodo()
        yield put({type:"GET_TODO"})
     }
  } catch (error) {
    console.log(error.message);
  }
}

function* getTodo() {
  try {
    const getTodoData = yield call(getTodo_api);
    console.log(getTodoData, "<------ todo Data todoSaga GetTOdoData");
    yield put(getTodos(getTodoData));
  } catch (error) {
    console.log(error.message);
  }
}

function* deleteTodo(action) {
    try {
        // console.log(action.payload, "<------ action.payload");
      const deleteTodoData = yield call(deleteTodo_api,action.payload);
      // console.log(deleteTodoData, "<------ todo Data todoSaga");
      let deletedData = deleteTodoData.data
      yield put(deleteTodos(deletedData));
      yield put({type:"GET_TODO"})
    } catch (error) {
      console.log(error.message);

    }
  }

function* todoSaga() {
  yield takeLatest("CREATE_TODO", addTodo);
  yield takeLatest("GET_TODO", getTodo);
    yield takeLatest("DELETE_TODO", deleteTodo);
}

export default todoSaga;
