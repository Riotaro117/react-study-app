const StudyList = ({ study }) => {
  return (
    <div>
      {study.map((study) => (
        <div key={study.id}>
          <span>{study.content}</span>
          <span>{`${study.time}時間`}</span>
        </div>
      ))}
    </div>
  );
};

export default StudyList;
