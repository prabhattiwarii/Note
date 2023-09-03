import React from 'react';
import { useNavigate } from "react-router-dom";
const Login = (props) => {

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect 
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Logged in successfully", "success");
        } else {
            props.showAlert("Invalid credentials", "danger");
        }
    }

    return (
        <div className="login-container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" ,marginTop:"-5rem"}}>
                <div className="col-md-6">
                    <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt="Login" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Login</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Email">Email address</label>
                                    <input type="email" className="form-control" id="Email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password" className="form-control" id="Password" name="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
