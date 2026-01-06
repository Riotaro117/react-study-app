import { useEffect, useState } from 'react';
import StudyForm from '../components/StudyForm';
import StudyList from '../components/StudyList';
import TotalTime from '../components/TotalTime';
import { studyRepository } from '@/modules/studys/study.repository';
import { useCurrentUserStore } from '@/modules/auth/current-user.state';
import { useStudyStore } from '@/modules/studys/study.state';

const Home = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputTime, setInputTime] = useState(0);

  const { currentUser } = useCurrentUserStore();
  const studyStore = useStudyStore();

  // はじめにDBからデータを取得する
  useEffect(() => {
    const fetchStudys = async () => {
      const data = await studyRepository.find(currentUser!.id);
      studyStore.setStudys(data);
    };
    fetchStudys();
  }, [currentUser]);

  const addList = async () => {
    // UIはReact側で制御するのでtry,catch文で
    try {
      const newstudy = await studyRepository.create(currentUser!.id, {
        content: inputVal,
        time: inputTime,
      });
      setInputVal('');
      setInputTime(0);
      // 配列の更新は破壊しないように！エラーが出ます
      studyStore.setStudys((prevStudy) => [...prevStudy, newstudy]);
    } catch (e: any) {
      alert(e.message);
    }
  };

  // const totalTime = studys.reduce((sum: number, item) => {
  //   // item.timeは文字列のためNumberを使用
  //   return sum + item.time;
  // }, 0);
  // console.log(totalTime); // 確認用
  return (
    <>
      <h1>学習記録アプリ</h1>
      <h2>目指せ1000時間！</h2>
      <StudyForm
        inputVal={inputVal}
        setInputVal={setInputVal}
        inputTime={inputTime}
        setInputTime={setInputTime}
      />
      <StudyList />
      <button onClick={addList}>登録</button>
      {/* <TotalTime  /> */}
    </>
  );
};

export default Home;
