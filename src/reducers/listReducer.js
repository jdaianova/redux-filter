import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  ADD_SERVICE_CHANGES,
  REMOVE_SERVICE,
} from '../actions/actionsTypes';

const initialState = [
  {
    id: 1,
    name: 'стекло',
    price: '333',
  },
  {
    id: 2,
    name: 'ремонт',
    price: '666',
  },
  {
    id: 3,
    name: 'аккумулятор',
    price: '4000',
  },
  {
    id: 4,
    name: 'ремонт плюс стекло',
    price: '9999',
  },
];

export default function listReducer(state = initialState, action) {
  const { index, id, name, price } = { ...action.payload };

  switch (action.type) {
    case ADD_SERVICE:
      return [...state, { id: nanoid(), name, price: price }];
    case ADD_SERVICE_CHANGES:
      const updatedState = [
        ...state.slice(0, index),
        {
          id: state[index].id,
          name: name,
          price: price,
        },
        ...state.slice(index + 1),
      ];
      return updatedState;
    case REMOVE_SERVICE:
      return state.filter((service) => service.id !== id);
    default:
      return state;
  }
}