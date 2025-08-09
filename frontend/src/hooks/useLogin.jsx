import { useState } from "react";
import {useAuth} from "./useAuth";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuth();

    const login = async (email, password) => {
        setError(null);
        setIsLoading(true);

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setIsLoading(false)
        }

        if(response.ok){
            // login user to storage
            localStorage.setItem('user', JSON.stringify(json));

            // update the auth context
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false)
        }
    }

    return {login, error, isLoading}
}