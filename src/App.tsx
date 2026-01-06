import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/Home';
import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
