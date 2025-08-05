import { Link } from "react-router-dom";
import { useState } from "react";

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <div className="form-container">

            <form className="create" onChange={handleSubmit}>
                <h3 className="form-title">Sign In</h3>

                <input 
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Login</button>
                 <p className="form-link">
                    <Link to='/register'>Don't have an Account? Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginUser;