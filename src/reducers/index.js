import { combineReducers } from 'redux';
import productosReducer from './productosreducer';

export default combineReducers({
    productos: productosReducer
});