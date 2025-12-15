import { useState } from 'react';

const Page = () => {
  const studyList = [];
  const [inputVal, setInputVal] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [study, setStudy] = useState(studyList);

  const addList = (e) => {
    e.preventDefault();
    const newStudy = { id: study.length + 1, content: inputVal, time: inputTime };
    setStudy((prev) => [...prev, newStudy]);
    setInputVal('');
    setInputTime('');
    console.log(newStudy); //登録されていることを確認
  };


  return (
    <>
      <h1>学習記録アプリ</h1>
      <h2>目指せ1000時間！</h2>
      <div>
        <label>
          学習内容
          <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        </label>
        <label>
          学習時間
          <input type="number" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
          時間
        </label>
      </div>
      <div>
        <span>入力されている学習内容:{inputVal} </span>
        <span>入力されている時間: {inputTime}時間</span>
      </div>
      <span>
        {study.map((study) => (
          <div key={study.id}>
            <span>{study.content}</span>
            <span>{`${study.time}時間`}</span>
          </div>
        ))}
      </span>
      <button onClick={addList}>登録</button>
      <span>{inputTime===undefined && "書きましょう"}</span>
      <span>合計時間: {} / 1000(h)</span>
    </>
  );
};

export default Page;
