import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img style={{width:"65%", marginTop:"2rem"}}
            src="https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="About"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <div className="text-center text-md-start mb-2">
            <h1 className="display-4">About Our Website</h1>
            <p className="lead">
              Welcome to our website, Note-Book! We are dedicated to providing you with a seamless note-taking experience.
            </p>
            <p>
              Our mission is to help you stay organized and keep track of your important notes and ideas. With our user-friendly interface, you can create, edit, and manage your notes effortlessly.
            </p>
            <p>
              Whether you're a student, professional, or just someone who loves to jot down thoughts, Note-Book is here to assist you on your note-taking journey.
            </p>
            <p>
              Feel free to explore our website and start creating your notes today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
