
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
//import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
//import AddBlogs from './components/AddBlogs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    {/* <BrowserRouter>
    <Routes>
      { <Route path="/" element={<Dashboard />} /> }
      <Route path="/addblog" element={<AddBlogs />} />
    </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
