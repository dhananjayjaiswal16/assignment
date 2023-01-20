import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from "../redux/userSlice"
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);
  console.log("user in Navbar", user);

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch(logout());
    navigate('/account/login');
  }

  return (
    <>
      <nav>
        <h2 className="left">Welcome!</h2>
        {user && (
          <div className="right">
            <div><Link className="link" to="/account/user">About User</Link></div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar;
