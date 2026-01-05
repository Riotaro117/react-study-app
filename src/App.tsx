import './App.css';
import Page from './pages/Page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Page/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
