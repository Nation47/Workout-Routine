import { useState } from "react";
import { useAuth } from "./useAuth";

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null)
    const { dispatch } = useAuth();

    const signup = async (email, password) => {
        setError(null);
        setIsLoading(true);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json));
            // update t auth context
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
        }
    }
    return {signup, isLoading, error}
}