import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useAuth} from '../hooks/useAuth'

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const {dispatch} = useAuth();
    const navigate = useNavigate()


    const handleSubmit = async(e) => {
        e.preventDefault();

        const login = {email, password}

        const response = await fetch ('/api/user/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({
                type: 'LOGIN', payload: json
            })
            navigate('/')
        }
        
    }

    return (
        <div className="form-container">

            <form className="create" onSubmit={handleSubmit}>
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
                {error && <div className="error">{error}</div>}
                 <p className="form-link">
                    <Link to='/register'>Don't have an Account? Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginUser;