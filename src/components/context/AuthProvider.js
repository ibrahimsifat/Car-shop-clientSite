import React,{createContext } from 'react';

import useFirebase from '../shared/useFirebase'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    //const {children}=props
  const  AllContext=useFirebase()
   return (
        <AuthContext.Provider value={AllContext}>
    {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;