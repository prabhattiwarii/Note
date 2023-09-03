import React, { useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = (props) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
        props.showAlert('Log out successfully', 'success');
    };
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> Note-Book </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ''}`} aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        <button className="btn btn-link" onClick={props.toggleDarkMode}>
                            {props.mode ? (
                                <i className="fa-solid fa-lightbulb"></i>
                            ) : (
                                <i className="fa-duotone fa-lightbulb"></i>
                            )}
                        </button>
                        {!localStorage.getItem('token') ? <form className="d-flex" >
                            <Link className='btn btn-outline-success mx-1' to='/login' role='botton'>Login</Link>
                            <Link className='btn btn-outline-secondary mx-1' to='/sign-up' role='button'>SignUp</Link>
                        </form> : <button onClick={handleLogOut} className='btn btn-dark'>Log out</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar