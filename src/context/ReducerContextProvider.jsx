import React, { createContext, useContext, useReducer } from 'react';

import { initialState, reducer } from '../reducers/TodosReducer';

export const ReducerContext = createContext();

export const ReducerContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ReducerContext.Provider value={[state, dispatch]}>
            {children}
        </ReducerContext.Provider>
    );
};
