import { useState } from 'react';

const Page = () => {
  const list = [{ id: '', content: '', time: '' }];
  const [content, setContent] = useState(list);
  console.log(list)
  const inputContent = (e) => setContent(e.target.value)
  console.log(inputContent)

  // const [time, setTime] = useState();
  return (
    <>
      <h1>学習記録アプリ</h1>
      <h2>目指せ1000時間！</h2>
      <label>
        学習内容
        <input type="text" value={content} onChange={inputContent} />
      </label>
      <label>
        学習時間
        <input type="number" />
        時間
      </label>
      <span>入力されている学習内容:{content} </span>
      <span>入力されている時間: </span>
      <span></span>
      <button>登録</button>
      <span>入力されていない項目があります</span>
      <span>合計時間: 1 / 1000(h)</span>
    </>
  );
};

export default Page;
