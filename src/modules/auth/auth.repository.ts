import { supabase } from '@/lib/supabase';

export const authRepository = {
  // ユーザー作成機能
  async signup(name: string, email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    //dataをreturnすると使いにくいため、元のオブジェクトを破壊しないようにコピーした
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },
  // ログイン機能
  async signin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },

  // 画面を更新してもログイン状態を維持する機能
  async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error != null) throw new Error(error.message);
    if (data.user == null) return;
    return { ...data.user, userName: data.user.user_metadata.name };
  },

  // ログアウト機能
  async signout() {
    const { error } = await supabase.auth.signOut();
    if (error != null) throw new Error(error.message);
    return true;
  },
};
