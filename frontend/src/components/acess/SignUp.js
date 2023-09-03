import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.cpassword.value;

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: password
      })
    });

    const json = await response.json();
    console.log(json);

    if (response.status === 200) {
      // Account creation was successful
      navigate('/login');
      props.showAlert("Account created successfully", "success");
    } else {
      // Account creation failed
      props.showAlert("Account creation failed", "danger");
    }
  }

  return (
    <div className="signup-container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" ,marginTop:"-5rem"}}>
        <div className="col-md-6">
          <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt="Sign Up" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="Name" name='name' aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="Email" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="Password" name='password' placeholder="Password" minLength={5} required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputPassword1"> Confirm Password</label>
                  <input type="password" className="form-control" id="Cpassword" name='cpassword' placeholder="Password" minLength={5} required />
                </div>
                {!passwordMatch && <p className="text-danger">Passwords do not match.</p>}
                <button type="submit" className="btn btn-outline-dark">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
