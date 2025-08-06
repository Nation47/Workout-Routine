import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

     if(!context) {
        throw new Error('useAuthContext must be used inside a AuthContextProvider a')
    }
    return context;
}