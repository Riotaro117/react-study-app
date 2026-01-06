import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUserStore } from './modules/auth/current-user.state';

const Layout = () => {
  const { currentUser } = useCurrentUserStore();

  // ログインしていない時の処理
  if (currentUser == null) return <Navigate replace to="/signin/" />;
  
  return (
    <div className="h-full flex">
      <main className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
