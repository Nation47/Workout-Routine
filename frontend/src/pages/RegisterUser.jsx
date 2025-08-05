import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <div className="form-container">

            <form className="" onChange={handleSubmit}>
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

                <input 
                    type="number"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button>Register</button>
                <p className="form-link">
                    <Link to='/login'>Already have an Account? Sign In</Link>
                </p>
            </form>
        </div>

    )
}

export default RegisterUser;