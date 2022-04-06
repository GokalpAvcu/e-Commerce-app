import {useState, createContext, useEffect, useContext} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null); // user kayıt olduğunda detay bilgilerini tutar
}