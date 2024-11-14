import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export const useAuthContext = () => {
    return useContext(AuthContext);
}
export const AuthContextProvider = ({children}) => {
    //convert from string -> obj
    //children is special prop name!
    // on reload null issue? handle:
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    return (
        <AuthContext.Provider value = {{authUser, setAuthUser}}>{children}</AuthContext.Provider>
    );
};