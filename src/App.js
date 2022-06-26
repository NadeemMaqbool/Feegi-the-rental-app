import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Topbar from './components/topbar/topbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import User from './pages/users/users.js'
import NewUser from './pages/newUser/newUser.js'
import Dashboard from './components/dashboard/dashboard.js'
import Content from './components/content/content.js'
import Reporting from './components/reporting/reporting.js'

function App() {
  return (
    <Router>
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={ <Content />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/users" element={ <User />} />
          <Route exact path="/users/new" element={ <NewUser /> } />
          <Route path="/reports" element={ <Reporting /> } />
          
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
