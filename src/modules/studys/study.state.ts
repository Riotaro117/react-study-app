import { atom, useAtom } from 'jotai';
import { Study } from './study.entity';

// jotaiではatomの初期値は絶対必要
const studyAtom = atom<Study[]>([]);

export const useStudyStore = () => {
  const [studys, setStudys] = useAtom(studyAtom);
  return { studys, setStudys };
};
