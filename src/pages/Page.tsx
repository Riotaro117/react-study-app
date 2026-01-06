import { useState } from 'react';
import StudyForm from '../components/StudyForm.js';
import StudyList from '../components/StudyList.js';
import TotalTime from '../components/TotalTime.js';



const Page = () => {
  // const studyList = []; 初期値専用変数は再利用する場合不要
  const [inputVal, setInputVal] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [study, setStudy] = useState([]);

  const [error, setError] = useState('');
  

  const addList = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newStudy = { id: crypto.randomUUID(), content: inputVal, time: Number(inputTime) }; // idは順番ではなく一意性
    if (newStudy.content && newStudy.time) {
      setStudy((prev) => [...prev, newStudy]);
      setInputVal('');
      setInputTime('');
      setError('');
      console.log(newStudy); //登録されていることを確認
    } else {
      setError('入力されていない項目があります');
    }
  };
  // const addList = (e) => {
  //   e.preventDefault();
  //   // const newStudy = { id: study.length + 1, content: inputVal, time: inputTime };
  //   const newStudy = { id: crypto.randomUUID(), content: inputVal, time: Number(inputTime) }; // idは順番ではなく一意性
  //   if (newStudy.content && newStudy.time) {
  //     setStudy((prev) => [...prev, newStudy]);
  //     setInputVal('');
  //     setInputTime('');
  //     setError('');
  //     console.log(newStudy); //登録されていることを確認
  //   } else {
  //     setError('入力されていない項目があります');
  //   }
  // };

  const totalTime = study.reduce((sum:number, item) => {
    // item.timeは文字列のためNumberを使用
    return sum + item.time;
  }, 0);
  console.log(totalTime); // 確認用
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
      <StudyList study={study} />
      <button onClick={addList}>登録</button>
      <span className="text-red">{error}</span>
      <TotalTime totalTime={totalTime} />
    </>
  );
};

export default Page;
