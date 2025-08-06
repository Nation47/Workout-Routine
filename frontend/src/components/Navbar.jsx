import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const {user} = useAuth();
    const {logout} = useLogout();
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Routine</h1>
                </Link>
                <div className='links'>
                    {user? (
                        <>
                            <span>{user.email}</span>
                            <Link to='/'>Home</Link>
                            <Link to='/addWorkout'>Create Workout</Link>
                            <button onClick={logout}>logout</button>

                        </>
                    ) : (
                        <>
                            <Link className='' to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </>
                    )}
                   
                </div>
            </div>
        </header>
    )
}
export default Navbar;
