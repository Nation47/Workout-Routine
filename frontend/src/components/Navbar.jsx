import { Link } from "react-router-dom";


const Navbar = () => {
 
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Routine</h1>
                </Link>
                <nav>
                    <div className='links'>
                            <>
                                <span></span>
                                <Link to='/'>Home</Link>
                                <Link to='/addWorkout'>Create Workout</Link>

                            </>
                            <>
                                <Link className='' to='/login'>Login</Link>
                                <Link to='/signup'>Signup</Link>
                            </>
                    
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;
