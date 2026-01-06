import { supabase } from '@/lib/supabase';

export const studyRepository = {
  async create(title, content) {
    const params = { title, content };
    const { data, error } = await supabase
      .from('studys')
      .insert([{ title: params.title, content: params.content }])
      .select()
      .single();
    if (error != null) throw new Error(error.message);
    return data;
  },
};
