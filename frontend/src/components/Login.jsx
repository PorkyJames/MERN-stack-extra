import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

//! Import variables
const navigate = useNavigate(); 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

    const handleDemoLogin = () => {
        const demoCredentials = {
            email: "demouser@gmail.com",
            password: "DemoLogin"
        }
    }

    //! Return Home Button for Title
    const returnToHome = () => {
        navigate('/')
    }

    return (
        <>
            {/* Main Page Button */}
            <div className="title-button">
                <button onClick={returnToHome}>
                    <h1> Climbr </h1>
                </button>
            </div>

            {/* Login Card */}
            <div className="login-card">
                <div className="login-card-title">
                    <h1>Login</h1>
                </div>

                <div className="login-card-inputs">
                    <input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
                    <input
						type="text"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
                </div>

                <div className="login-card-demo-login-button">
                    <button>Demo-Login</button>
                </div>
            </div>

        </>
    )
};

export default Login;
