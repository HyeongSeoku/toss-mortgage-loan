import { FixedBottomCTA, Icon, List, ListRow, Lottie, Spacing } from '_tosslib/components';
import { Top03 } from '_tosslib/components/Top';
import { colors } from '_tosslib/constants/colors';
import { marginX24 } from '_tosslib/utils/spacing';

export function InquiryCompletePage() {
  return (
    <>
      <Lottie
        src="https://static.toss.im/lotties/confetti/confetti-explode.json"
        loop
        css={{ position: 'fixed', width: '100vw' }}
      />

      <Spacing size={20} />
      <Icon name="icon-toss-logo" size={40} css={marginX24} />
      <Top03 color={colors.grey900}>대출 조회 결과가 나왔어요!</Top03>
      <Spacing size={16} />
      <List>
        <ListRow
          contents={
            <ListRow.Text2Rows
              top="임지훈님의 맞춤 금리"
              topProps={{ color: colors.grey900, typography: 't7' }}
              bottom={formatRate1000(162)}
              bottomProps={{ color: colors.blue500, typography: 't2', fontWeight: 'semibold' }}
            />
          }
        />
        <ListRow
          contents={
            <ListRow.Text2Rows
              top="한도"
              topProps={{ color: colors.grey900, typography: 't7' }}
              bottom="20억 3,000만원"
              bottomProps={{ color: colors.blue500, typography: 't2', fontWeight: 'semibold' }}
            />
          }
        />
      </List>
      <FixedBottomCTA
        onClick={() => {
          // 개발 편의를 위해 앱 재시작
          location.replace('/start');
        }}
      >
        지금 바로 받으러 가기
      </FixedBottomCTA>
    </>
  );
}
export function formatRate1000(rate1000: number): string {
  return `${[(rate1000 / 10).toFixed(0), rate1000 % 10].join('.')}%`;
}
