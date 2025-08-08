import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const RegisterUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const {dispatch} = useAuth();

    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const register = {name, email, password}

        const response = await fetch ('/api/user/register', {
            method: 'POST',
            body: JSON.stringify(register),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            navigate('/')
        }

    }

    return (
        <div className="form-container">

            <form className="" onSubmit={handleSubmit}>
                <h3 className="form-title">Register</h3>

                <input 
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />

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

                {/* <input 
                    type="number"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /> */}
                <button>Register</button>
                <p className="form-link">
                    <Link to='/login'>Already have an Account? Sign In</Link>
                </p>
            </form>
        </div>

    )
}

export default RegisterUser;