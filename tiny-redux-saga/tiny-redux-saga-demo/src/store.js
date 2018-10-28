import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { call, takeEvery, put } from './tiny-redux-saga';
import { mock } from './api';

const initState = {
  list: [
    {desc: '手机'},
    {desc: '电脑'}
  ]
}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        list: action.payload.list
      }
    case 'CLEAR': 
      return {
        ...state,
        list: []
      }
    default:
      return state  
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

function *saga() {
  yield takeEvery('FEATCH_LIST', function *() {
    try {
      const list = yield call(mock);
      yield put({
        type: 'UPDATE',
        payload: {
          list
        }
      })
    } catch(err) {
      yield put({
        type: 'CLEAR'
      })
    }
  })
}
sagaMiddleware.run(saga);

export default store;