import './App.css';
import Page from './pages/Page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Page/>} />
          {/* <Route path='/signin' element={<Signin/>}/> */}
          {/* <Route path='/signup' element={<Signup/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
