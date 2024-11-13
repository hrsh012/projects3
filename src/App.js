// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.js';
import Dashboard from './components/dashboard.tsx';  
import Project from './pages/projects.tsx';
import Profile from './pages/profile.tsx';
import Task from './pages/task.tsx';
import Layout from './pages/navbar/layout.tsx';
// import Sidebar from './pages/sidebar/sidebar.jsx';
import Worklog from './pages/worklog/worklog.tsx';
import Details from './pages/details/details.tsx';
import User from './pages/user/user.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login (no navbar) */}
        <Route path="/" element={<Login />} />
        
        {/* Layout will include the Navbar on all the routes inside this block */}
        <Route element={<Layout />}>
        {/* <Route element={<Sidebar />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/task" element={<Task />} />
          <Route path="/worklog" element={<Worklog />} />
          <Route path="/details" element={<Details />} />
          <Route path="/user" element={<User />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

