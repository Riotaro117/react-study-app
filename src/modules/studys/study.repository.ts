import { supabase } from '@/lib/supabase';
import { Study } from './study.entity';

export const studyRepository = {
  // 学習内容を登録する処理
  async create(userId: string, params: { content: string; time: number }) {
    //先にエラーを書いておく
    if (params.content == '') {
      throw new Error('学習内容を書いて下さい');
    }
    if (params.time < 1) throw new Error('無効な時間です');

    const { data, error } = await supabase
      .from('studys')
      .insert({
        user_id: userId,
        content: params.content,
        time: params.time,
      })
      .select()
      .single();
    if (error != null) throw new Error(error.message);

    return data;
  },

  // DBの内容を取得する処理
  async find(userId: string): Promise<Study[]> {
    const { data, error } = await supabase.from('studys').select('*').eq('user_id', userId);
    if (error != null) console.error(error)
    // if (error != null) throw new Error(error.message);

    return data ?? [];
  },
};
