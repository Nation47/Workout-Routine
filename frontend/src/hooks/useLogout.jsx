import { useAuth } from "./useAuth";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
    const {dispatch} = useAuth();
    const {dispatch: workoutsDispatch} = useWorkoutsContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}
}