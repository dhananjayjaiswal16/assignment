import './App.css';
import { Link, Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import User from "./pages/User"
import Post from "./pages/Post"
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';

function App() {
  const user = useSelector(state => state.currentUser);
  const isFetching = useSelector(state => state.isFetching)
  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/account/login" element={!user ? <Login /> : <Navigate replace to="/account/user" />} />
          <Route exact path="/account/user" element={!!user ? <User /> : <Navigate replace to="/account/login" />} />
          <Route exact path="/account/post/:post_number" element={!!user ? <Post /> : <Navigate replace to="/account/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
