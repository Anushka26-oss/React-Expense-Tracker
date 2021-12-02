import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

//everything wrapped inside this component will have access to the context
export const Provider = ({ children }) => {
    //here our state represents all of the transactions
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators

    //once you delete the transaction then call this function with provided id and dispatch an action
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    console.log(transactions);
    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}