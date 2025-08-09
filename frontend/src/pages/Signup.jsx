import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignup} from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();
    const {signup, error, isLoading} = useSignup();


    const handleSubmit = async(e) => {
        e.preventDefault();

        await signup(email, password);
        console.log(email, password)
    }

    return (
        <div className="form-container">

            <form className="" onSubmit={handleSubmit}>
                <h3 className="form-title">Sign Up</h3>
                <label>Email</label>
                <input 
                    type="email"
                    value={email}
                    placeholder="example@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input 
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={isLoading}>Sign Up</button>
                {error && <div className="error">{error}</div>}
                <p className="form-link">
                    <Link to='/login'>Already have an Account? Sign In</Link>
                </p>
            </form>
        </div>

    )
}

export default Signup;