import { useStudyStore } from '@/modules/studys/study.state';

const StudyList = () => {
  const { studys } = useStudyStore();
  return (
    <div className='flex flex-col gap-5'>
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
