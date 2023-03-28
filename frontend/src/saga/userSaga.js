import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { login_api, register_api } from "../action";
import { register, login } from "../reducers/userReducer";

function* registerUser({ payload: { name, email, password,navigate } }) {
  try {
    const data = yield register_api({ name, email, password });
    console.log(data, "data");
    yield put(register(data));
    if(data.success===true){
     navigate("/")
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* loginUser(action) {
  try {
    console.log(action.payload, "<--- action.payload, userSaga");
    
    const data = yield call(login_api,action.payload)
    console.log(data,"<-------------data ,userSaga");
    
    if(data.success===true){
      yield put(login(data))
    }
if(data.token){
  action.payload.navigate("/todo")
}
    
  } catch (error) {
    console.log(error.message);
  }
}

function* userSaga() {
  yield takeLatest("REGISTER", registerUser);
  yield takeLatest("LOGIN", loginUser);
}

export default userSaga;
