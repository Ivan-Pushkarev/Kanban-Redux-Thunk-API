import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";

const initialState = {
    list: [],
    editCardValue: {
        name: '',
        description: '',
        priority: '',
        status: ''
    },
    modal: false
  
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case 'GET_CARDS':
            return { ...state, list: action.payload}
        case 'GET_EDIT_CARD':
             return { ...state, editCardValue: action.payload}
        case 'OPEN_MODAL':
             return { ...state, modal: true}
        case 'CLOSE_MODAL':
             return { ...state, modal: false}
       
        default:
            return state;
    }
}

const store = createStore(reducer, compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;