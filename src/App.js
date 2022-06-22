import './App.css';
import Topbar from './components/topbar/topbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import Content from './components/content/content.js'

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
