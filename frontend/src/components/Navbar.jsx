import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";


const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuth();


    const handleClick = () => {
        logout()
    }
 
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>FitTrack</h1>
                </Link>
                <nav>
                    <div className='links'>
                        {user && (
                            <div>
                                <span>{user.email}</span>
                                {/* <Link to='/'>Home</Link> */}
                                <Link to='/addWorkout'>Create Workout</Link>
                                <button className="" onClick={handleClick}>Logout</button>
                            </div>
                        )}

                        {!user && (
                            <div>
                                <Link className='' to='/login'>Login</Link>
                                <Link to='/signup'>Signup</Link>
                            </div>
                        )}
                    
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;
