const StudyForm = ({inputVal,setInputVal,inputTime,setInputTime}) => {
  return (
    <>
      {' '}
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
    </>
  );
};

export default StudyForm;
