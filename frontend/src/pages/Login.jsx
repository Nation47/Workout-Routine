import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useLogin} from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate()

    const {login, isLoading, error} = useLogin()


    const handleSubmit = async(e) => {
        e.preventDefault();

        await login(email, password);
   
    }

    return (
        <div className="form-container">

            <form className="create" onSubmit={handleSubmit}>
                <h3 className="form-title">Sign In</h3>

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

                <button disabled={isLoading}>Sign In</button>
                {error && <div className="error">{error}</div>}
                 <p className="form-link">
                    <Link to='/signup'>Don't have an Account? Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;