const Page = () => {
  return (
    <>
      <h1>学習記録アプリ</h1>
      <h2>目指せ1000時間！</h2>
      <label>
        学習内容
        <input type="text" />
      </label>
      <label>
        学習時間
        <input type="number" />
        時間
      </label>
      <span>入力されている学習内容: </span>
      <span>入力されている時間: </span>
      <span></span>
      <button>登録</button>
      <span>入力されていない項目があります</span>
      <span>合計時間: 1 / 1000(h)</span>
    </>
  );
};

export default Page;
