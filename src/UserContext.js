import React from 'react';

//It creates a COntext object
//A context object, as the name states is a data type ofna object that canbe used to store information that can be shared to other components with in the app
//we used this to avoid the use of prop-drilling
const UserContext = React.createContext();

//Provide component => it allows the other components to consume/use the context object and supply the necessary information needed to the context object
export const UserProvider = UserContext.Provider;

export default UserContext;