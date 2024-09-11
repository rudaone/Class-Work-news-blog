import { createStore, combineReducers, applyMiddleware } from 'redux';
import { postsReducer, uiReducer, userReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { watcherPosts, watcherUser } from './actionCreators';

export default createStore(
  combineReducers({
    posts: postsReducer,
    ui: uiReducer,
  }),
);

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
    yield all([
        watcherPosts(),
        watcherUser()
    ])
}

const store = createStore(
    combineReducers({
        posts: postsReducer,
        ui: uiReducer,
        user: userReducer
    }), {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export { store }
