import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //preparing the data layer

//higher order component to wrap the app inside the stateprovider to get data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//use this statevalue hook to pull data
export const useStateValue = () => useContext(StateContext);