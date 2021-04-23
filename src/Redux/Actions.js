import axios from 'axios';

export function getCards () {
    return (dispatch) => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                   // type: 'OPEN_MODAL',
                    payload: res.data,
                });
            })
            .catch(() => {
                console.log('could not get cards');
            });
    };
}

export function openModalFunction () {
    return (dispatch) => {
        dispatch({
            type: 'OPEN_MODAL'
        });
    };
}
export function toggleEditModal() {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_EDIT_MODAL'
        });
    };
}
export function getEditCard (id) {
    return (dispatch) => {
        axios.get(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => {
                dispatch({
                    type: 'GET_EDIT_CARD',
                    payload: res.data,
                });
            })
            .catch(() => {
                console.log('could not get cards');
            });
    };
}
export function createCard (task) {
    return (dispatch) => {
        axios.post('https://nazarov-kanban-server.herokuapp.com/card', task)
            .then(()=> {
                dispatch(openModalFunction());
                dispatch(getCards());
            });
    };
}

export function editCard (cardId, task) {
    return (dispatch) => {
        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`, task)
            .then(()=> {
                dispatch(getCards());
            });
    };
}

export function deleteCard (cardId) {
    return (dispatch) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`)
            .then(() => {
                dispatch(getCards());
            })
            .catch(() => {
                console.log('could not delete a card');
            });
    };
}
export function editFormElements(name, value) {
    return (dispatch) => dispatch({
        type: 'EDIT_INPUTS',
        payload: {name, value}
    });
}