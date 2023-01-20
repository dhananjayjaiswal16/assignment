import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NotFound() {
  const user = useSelector(state => state.currentUser)
  return (
    <>
      <div className="not-found">
        <h1>404 | Not Found</h1>
        <Link to="/account/login" className="btn2">Go back to {user ? "user" : "login"}</Link>
      </div>
    </>
  )
}

export default NotFound;
