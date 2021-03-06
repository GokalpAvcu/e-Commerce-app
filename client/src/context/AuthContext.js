import {useState, createContext, useEffect, useContext} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null); // user kayıt olduğunda detay bilgilerini tutar
   const [loggedIn, setLoggedIn] = useState(false)

   const login = (data) => {
       setLoggedIn(true);
       setUser(data);
   };

   const values = {
       loggedIn,
       user,
       login,
   };
   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);

export{ AuthProvider, useAuth };