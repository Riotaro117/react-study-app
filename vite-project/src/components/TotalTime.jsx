const TotalTime = ({totalTime}) => {
  return (
    <div>
      <span>
        合計時間:
        {totalTime}/ 1000(h)
      </span>
      <strong className="strong card form">{totalTime >= 1000 && '君は努力の天才だ！！'}</strong>
    </div>
  );
};

export default TotalTime;
