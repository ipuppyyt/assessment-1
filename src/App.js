import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlogs from './components/AddBlogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addblogs" element={<AddBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
