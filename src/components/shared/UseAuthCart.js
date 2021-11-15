import { useContext } from 'react';
import { AuthContext2 } from '../context/AuthProvider2';

const UseAuthCart = () => {
    return useContext(AuthContext2)
};

export default UseAuthCart;