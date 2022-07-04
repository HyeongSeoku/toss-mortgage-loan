import { useRouter } from 'pages/routing';
import { Button, FixedBottomCTA, List, ListRow, Spacing } from '_tosslib/components';
import { Top03 } from '_tosslib/components/Top';
import { colors } from '_tosslib/constants/colors';

export function ConfirmationPage() {
  const router = useRouter();

  return (
    <>
      <Spacing size={17} />
      <Top03 color={colors.grey900}>아래 정보가 맞는지 확인해주세요</Top03>
      <Spacing size={37} />
      <List>
        <ListRow
          contents={
            <ListRow.Text1Row
              top="이름"
              topProps={{
                color: colors.grey700,
              }}
            />
          }
          right={
            <ListRow.Text1Row
              top="임지훈"
              topProps={{
                color: colors.grey700,
              }}
            />
          }
        />
        <ListRow
          contents={
            <ListRow.Text1Row
              top="아파트 주소"
              topProps={{
                color: colors.grey700,
                typography: 't5',
              }}
            />
          }
          right={
            <ListRow.Text2Rows
              top="토스시 송금동 토스아파트"
              topProps={{
                color: colors.grey700,
                typography: 't5',
                fontWeight: 'bold',
              }}
              bottom="1001동"
              bottomProps={{
                color: colors.grey700,
                typography: 't5',
                textAlign: 'end',
              }}
            />
          }
        />
      </List>
      <FixedBottomCTA.TypeB
        leftButton={
          <Button style="weak" type="dark" onClick={() => router.back()}>
            바꿀래요
          </Button>
        }
        rightButton={
          <Button style="fill" type="primary" onClick={() => router.push('/waiting')}>
            맞아요
          </Button>
        }
      />
    </>
  );
}
