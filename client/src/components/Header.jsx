import { Link, NavLink } from "react-router";
import logo from '../assets/hl.jpg';
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

export function Header() {
    const { isLoggedIn } = useContext(UserContext);

    return (
        <header className="p-3 text-bg-dark d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 text-white border-bottom">
            <div className="col-md-3 mb-1 mb-md-0">
                <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={logo} height={50} alt="Logo" />
                </Link>
            </div>
            <ul className="nav nav-pills col-12 col-md-auto mb-2 text-white justify-content-center mb-md-0">
                <li>
                    <NavLink to='/' className="nav-link px-2 text-white">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/movies' className="nav-link px-2 text-white">Items</NavLink>
                </li>
                <li>
                    <NavLink to='/categories' className="nav-link px-2 text-white">Containers</NavLink>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                {isLoggedIn ? (
                    <>
                        <Link to="/admin" className="btn btn-primary">Dashboard</Link>
                        <Link to="/logout" className="btn btn-warning">Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                        <Link to="/login" className="btn btn-warning">Login</Link>
                    </>
                )}
            </div>
        </header>
    );
}