// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Define tus reductores en este archivo

const store = createStore(rootReducer);

export default store;
