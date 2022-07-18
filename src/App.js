import './App.css';
import { useState, useCallback, useEffect } from 'react';
import { AuthContext } from './context/auth-context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Topbar from './components/topbar/topbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import User from './pages/users/users.js'
import General from './pages/general/form-components'
import Dashboard from './components/dashboard/dashboard.js'
import Content from './components/content/content.js'
import Signup from './pages/signup/Signup.js'
import Login from './pages/login/login.js'
import Reporting from './components/reporting/reporting.js'
import AnimationLoader from './utils/loader/animationLoader.js';

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);

  let routes;
  
  const login = useCallback((uuid, token) => {
      if (!token) {
        const storedData = localStorage.getItem('userData')
        setToken(storedData.token)
      } else {
        setToken(token);
        localStorage.setItem('userData', JSON.stringify({userId: uuid, token: token}));
        setUserId(uuid);
      }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData')
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if (storedData) {
      login(storedData.userId, storedData.token)
    }
  },[login])
  
  if (token) {
    routes = (
        <div>
          <Topbar />
          <div className="container">
            <Sidebar />
              <Routes>
                <Route exact path="/" element={ <Content />} />
                <Route path="/dashboard" element={ <Dashboard />} />
                <Route path="/users" element={ <User />} />
                <Route exact path="/users/new" element={ <General /> } />
                <Route path="/reports" element={ <Reporting /> } />
                <Route index to="/users" element={ <User />} />
            </Routes>
          </div>
        </div>
    );
  } else {
    routes = (
      <div>
        <Routes>
          <Route exact path="/signup" element={ <Signup />} />
          <Route exact path="/login" element={ <Login />} />
          <Route exact path="/animate" element={ <AnimationLoader />} />
          <Route index to="/login" element={ <Login />} />
        </Routes>
      </div>
    )
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, token:token, userId:userId, login:login, logout:logout }}>
      <Router>
          <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
