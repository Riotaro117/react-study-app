import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/Home';
import Layout from './layout';
import { useEffect, useState } from 'react';
import { useCurrentUserStore } from './modules/auth/current-user.state';
import { authRepository } from './modules/auth/auth.repository';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const currentUserStore = useCurrentUserStore();

  // ログイン状態を保持する処理
  useEffect(() => {
    const getUser = async () => {
      const currentUser = await authRepository.getCurrentUser();
      currentUserStore.set(currentUser);
      setIsLoading(false);
    };
    getUser();
  }, []);

  if (isLoading) return <div>Now loading...</div>;

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
