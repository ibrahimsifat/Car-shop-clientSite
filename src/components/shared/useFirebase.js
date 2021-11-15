
 import firebaseInitialize from '../Firebaseinitializa/firebaseInitialize'
 import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
 
 const googleProvider = new GoogleAuthProvider();

 firebaseInitialize()
const useFirebase = () => {
const [user,setUser]=useState('')
const [error,setError]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setName]=useState('')
const [admin,setAdmin]=useState(false)
const [isLoading, setIsLoading] = useState(true);
// all input event handler

const handleUserEmail=(e)=>{
setEmail(e.target.value)
}
const handelUserPassword=(e)=>{
    setPassword(e.target.value)
}
const handelUserName=(e)=>{
    setName(e.target.value)
}

const auth=getAuth()
const signInUsingGoolge=()=>{
    setIsLoading(true);
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        const newUser = { email, displayName: name };
        setUser(newUser);
        setUser(result.user)
        const user=result.user
        saveUser(user.email,user.displayName,'PUT')
        setError('')
    })
    
    .catch(error=>{
        setError(error.message)
    })
    .finally(() => setIsLoading(false));
}


const saveUser=(email,displayName,method)=>{
    const user={email,displayName}
    fetch('http://localhost:5000/users',{
        method:method,
        headers:{
                'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then()
    }

 useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
        setIsLoading(false)
    })
 },[])
 const createNewUser=()=>{
  return  createUserWithEmailAndPassword(auth,email,password)

 }

const setNewUserName=()=>{
    updateProfile(auth.currentUser, {displayName: name})
      .then(result => {})

}
const login=()=>{
  return  signInWithEmailAndPassword(auth,email,password) 
}
const logOut=()=>{
    setIsLoading(true);
    signOut(auth)
    .then(result=>{
        setUser({})
    })
    .finally(() => setIsLoading(false));
}


//is admin
useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
},[user.email])


    return {
        isLoading,
        setIsLoading,
        signInUsingGoolge,
        user,
        error,
        email,
        logOut,
        handelUserPassword,
        handleUserEmail,
        createNewUser,
        handelUserName,
        name,
        login,
        saveUser,
        setError,
        setNewUserName,
        admin
    }
};

export default useFirebase;