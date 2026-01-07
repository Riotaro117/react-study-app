import { useCurrentUserStore } from '@/modules/auth/current-user.state';
import { studyRepository } from '@/modules/studys/study.repository';
import { useEffect, useState } from 'react';

type Props = {
  updateAt: number;
};

const TotalTime = ({ updateAt }: Props) => {
  const [totalTime, setTotalTime] = useState(0);
  const { currentUser } = useCurrentUserStore();

  useEffect(() => {
    if (!currentUser) return;
    const fetchStudyTimes = async () => {
      const total = await studyRepository.totalTime(currentUser.id);
      setTotalTime(total);
    };
    fetchStudyTimes();
  }, [currentUser, updateAt]);

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
