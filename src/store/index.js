import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import {adminReducer} from './reducer/adminReducer'
import {dashboradCategoryReducer} from './reducer/dashboradCategoryReducer'
const rootReducer= combineReducers({
adminReducer,
dashboradCategoryr:dashboradCategoryReducer
});
const middleware = [ThunkMiddleware];


const store = createStore(rootReducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;