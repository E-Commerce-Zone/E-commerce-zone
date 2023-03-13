import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential } from "firebase/auth";
import React, { useState, createContext } from "react";
import auth from "../Config/Firebase.init";

type AuthProviderProps = {
   children: React.ReactNode;
};

type AuthInfo = {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>; 
   CreateUser: (email: string, password: string) => Promise<UserCredential>, 
   SignIn: (email: string, password: string) => Promise<UserCredential>, 
   UpdateUserProfile: (profile: {
    displayName: string;
    photoURL: string;
}) => Promise<void>
};

type User = {
   uid: string;
   email: string;
};

export const AuthContext = createContext({} as AuthInfo);

const AuthProvider = ({ children }: AuthProviderProps) => {
   const [user, setUser] = useState<null | User>(null);
   const CreateUser = (email:string,password:string ) =>{
      return createUserWithEmailAndPassword(auth, email, password)
   }  

   const SignIn = (email:string, password:string) => {
         return signInWithEmailAndPassword(auth, email, password);
   }

   const UpdateUserProfile = (profile:{displayName:string, photoURL:string}) => {
      return updateProfile(auth.currentUser!, profile);
   }


   
   const authInfo: AuthInfo = { user,setUser, CreateUser, SignIn, UpdateUserProfile };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
 