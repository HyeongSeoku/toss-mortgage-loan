import { useRouter } from 'pages/routing';
import { useEffect } from 'react';
import { Lottie } from '_tosslib/components';
import { Top03 } from '_tosslib/components/Top';
import { colors } from '_tosslib/constants/colors';

export function WaitingPage() {
  const router = useRouter();
  useEffect(() => {
    const handle = setTimeout(() => router.push('/inquiry-complete'), 3000);
    return () => clearTimeout(handle);
  }, [router]);

  return (
    <>
      <Top03 color={colors.grey900}>{`입력한 정보로\n임지훈님의 대출 조건을 확인할게요`}</Top03>
      <Lottie src="https://static.toss.im/lotties/loading/profile-loading.json" loop />
    </>
  );
}
