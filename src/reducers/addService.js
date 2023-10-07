import { CHANGE_SERVICE_FIELD } from '../actions/actionsTypes';

const initialState = { title: 'ремонт', price: '222' };

export default function addService(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        default:
            return state;
    }
};

