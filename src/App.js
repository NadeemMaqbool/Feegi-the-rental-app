import './App.css';
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
import AddUnit from './pages/unit/addUnit'
import {useAuth} from './utils/hooks/useAuth'
import NotFound from './pages/Errors/notFound'

function App() {
  
  const {token, login, logout, userId} = useAuth()
  let routes;
  
  if (token) {
    routes = (
        <div>
          <Topbar />
          <div className="container">
            <Sidebar />
              <Routes>
                <Route exact path="/" element={ <Content />} />
                <Route path="/dashboard" element={ <Dashboard />} />
                <Route path="/units" element={ <AddUnit />} />
                <Route exact path="/users/new" element={ <General /> } />
                <Route path="/reports" element={ <Reporting /> } />
                <Route index path="/users" element={ <User />} />
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
          <Route path="*" element={ <NotFound />} />
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
