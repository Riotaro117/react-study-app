import { Dispatch, SetStateAction } from 'react';

type Props = {
  inputVal: string;
  setInputVal: Dispatch<SetStateAction<string>>;
  inputTime: number;
  setInputTime: Dispatch<SetStateAction<number>>;
};

const StudyForm = ({ inputVal, setInputVal, inputTime, setInputTime }: Props) => {
  return (
    <>
      <div className="flex flex-col p-4">
        <label>
          学習内容→
          <input
            className="text-right"
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </label>
        <label>
          学習時間→
          <input
            className="text-right"
            type="number"
            value={inputTime}
            onChange={(e) => setInputTime(Number(e.target.value))}
          />
          時間
        </label>
      </div>
      <div className="flex flex-col p-4">
        <span>入力されている学習内容:{inputVal} </span>
        <span>入力されている時間: {inputTime}時間</span>
      </div>
    </>
  );
};

export default StudyForm;
