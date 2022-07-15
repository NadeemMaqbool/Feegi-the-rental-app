import './App.css';
import { useState } from 'react';
import { AuthContext } from './context/auth-context';
import {
  BrowserRouter as Router,
  Routes,
  Route
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let routes;
  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
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
        </Routes>
      </div>
    )
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
          <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
