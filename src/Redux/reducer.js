import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

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
        case 'EDIT_INPUTS':
            const {name, value} = action.payload;
            switch (name) {
                case 'name':
                    return {...state, editCardValue: {...state.editCardValue, name: value}};
                case 'description':
                    return {...state, editCardValue: {...state.editCardValue, description: value}};
                case 'status':
                    return {...state, editCardValue: {...state.editCardValue, status: value}};
                case 'priority':
                    return {...state, editCardValue: {...state.editCardValue, priority: value}};
                default:
                    return state;
            }
        default:
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;