import { useState } from 'react';

const Page = () => {
  // const studyList = []; 初期値専用変数は再利用する場合不要
  const [inputVal, setInputVal] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [study, setStudy] = useState([]);

  const [error, setError] = useState('');

  const addList = (e) => {
    e.preventDefault();
    // const newStudy = { id: study.length + 1, content: inputVal, time: inputTime };
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

  const totalTime = study.reduce((sum, item) => {
    // item.timeは文字列のためNumberを使用
    return sum + item.time;
  }, 0);
  console.log(totalTime);

  return (
    <>
      <h1>学習記録アプリ</h1>
      <h2>目指せ1000時間！</h2>
      <div className="form card">
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
      <div className="form">
        <span>入力されている学習内容:{inputVal} </span>
        <span>入力されている時間: {inputTime}時間</span>
      </div>
      <div>
        {study.map((study) => (
          <div key={study.id}>
            <span>{study.content}</span>
            <span>{`${study.time}時間`}</span>
          </div>
        ))}
      </div>
      <button onClick={addList}>登録</button>
      <span className="text-red">{error}</span>
      <div>
        <span>
          合計時間:
          {totalTime}/ 1000(h)
        </span>
        <strong className="strong card form">{totalTime >= 1000 && '君は努力の天才だ！！'}</strong>
      </div>
    </>
  );
};

export default Page;
