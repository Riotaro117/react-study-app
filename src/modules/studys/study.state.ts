import { atom, useAtom } from 'jotai';
import { Study } from './study.entity';

// jotaiではatomの初期値は絶対必要
const studyAtom = atom<Study[]>([]);

export const useStudyStore = () => {
  const [studys, setStudys] = useAtom(studyAtom);
  // 入力したリストを空っぽにする
  const clear = () => setStudys([]);
  return { studys, setStudys, clear };
};
