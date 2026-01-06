import { useStudyStore } from '@/modules/studys/study.state';

const StudyList = () => {
  const { studys } = useStudyStore();
  return (
    <div>
      {studys.map((study) => (
        <div key={study.id}>
          <span>{study.content}</span>
          <span>{`${study.time}時間`}</span>
        </div>
      ))}
    </div>
  );
};

export default StudyList;
