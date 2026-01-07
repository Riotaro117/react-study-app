import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUserStore } from './modules/auth/current-user.state';
import { useStudyStore } from './modules/studys/study.state';
import { authRepository } from './modules/auth/auth.repository';

const Layout = () => {
  const currentUserStore = useCurrentUserStore();
  const studyStore = useStudyStore();

  // ログインしていない時の処理
  if (currentUserStore.currentUser == null) return <Navigate replace to="/signin/" />;

  const signout = async () => {
    await authRepository.signout();
    currentUserStore.set(undefined); // ユーザー情報を空っぽにする
    studyStore.clear();
  };
  return (
    <div className="h-full flex">
      <main className="flex-1 h-full overflow-y-auto">
        <Outlet />
        <p>{currentUserStore.currentUser.user_metadata.name}さんの学習記録</p>
        <button onClick={signout}>ログアウト</button>
      </main>
    </div>
  );
};

export default Layout;
