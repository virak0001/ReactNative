import React, {createContext} from 'react';
export const initialState = {
  size: 0,
  expens: [
    {
      id: '1',
      product: 'Sport Sheose',
      price: '38$',
      date: '2020-09-29',
    },
    {
      id: '2',
      product: 'Clothes',
      price: '50$',
      date: '2020-09-29',
    },
    {
      id: '3',
      product: 'MIMI',
      price: '10$',
      date: '2020-09-29',
    },
    {
      id: '4',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '5',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '6',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '7',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '8',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '9',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '10',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
    {
      id: '11',
      product: 'Watch',
      price: '45$',
      date: '2020-09-29',
    },
  ],
};
export const ExpensContext = createContext(initialState);
