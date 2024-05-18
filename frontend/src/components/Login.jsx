import React from "react";

const Login = () => {


    const handleDemoLogin = () => {
        const demoCredentials = {
            email: "demouser@gmail.com",
            password: "DemoLogin"
        }

        

    }

    return (
        <>
            <div className="title-button">
                <button onClick={titleButton}>
                    <h1> Climbr </h1>
                </button>
            </div>
        </>
    )
};

export default Login;
