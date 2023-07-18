import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import PublicNav from './components/Navigation/PublicNav/PublicNav';
import Login from './components/Users/Login/Login';
import Register from './components/Users/Login/Register';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicNav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
