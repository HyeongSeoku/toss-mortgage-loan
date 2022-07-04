import { Spacing, Border, List, ListHeader, ListRow, Icon, FixedBottomCTA, Banner } from '_tosslib/components';
import { marginX24 } from '_tosslib/utils/spacing';
import { Top03 } from '_tosslib/components/Top';
import { colors } from '_tosslib/constants/colors';
import { useRouter } from 'pages/routing';

export function StartPage() {
  const router = useRouter();
  return (
    <>
      <Spacing size={20} />
      <Icon name="icon-toss-logo" size={40} css={marginX24} />
      <Top03 color={colors.grey900}>{`토스 프론트엔드\n기술과제를 시작할게요`}</Top03>
      <Spacing size={32} />
      <Banner
        css={marginX24}
        iconSrc="https://static.toss.im/3d-emojis/u1F91D-apng.png"
        top="지금 토스팀에 합류해서"
        bottom="최고의 제품을 함께 만들어요!"
      />
      <Spacing size={24} />
      <Border size={16} />
      <List>
        <ListHeader>토스에 합류하시면</ListHeader>
        <Spacing size={9} />
        <ListRow
          contents={
            <ListRow.Text2Rows
              top="최고의 제품을 만들어"
              topProps={{
                color: colors.grey700,
              }}
              bottom="시장을 혁신하는 경험을 할 수 있어요"
              bottomProps={{
                color: colors.grey600,
                typography: 't5',
                fontWeight: 'bold',
              }}
            />
          }
          right={<Icon name="icon-check" size={30} />}
        />
        <Spacing size={4} />
        <ListRow
          contents={
            <ListRow.Text2Rows
              top="자율과 책임 원칙 아래"
              topProps={{
                color: colors.grey700,
              }}
              bottom="스스로 결정하고 주도적으로 일할 수 있어요"
              bottomProps={{
                color: colors.grey600,
                typography: 't5',
                fontWeight: 'bold',
              }}
            />
          }
          right={<Icon name="icon-check" size={30} />}
        />
        <Spacing size={4} />
        <ListRow
          contents={
            <ListRow.Text2Rows
              top="최고의 동료와"
              topProps={{
                color: colors.grey700,
              }}
              bottom="큰 폭의 성장을 이룰 수 있어요"
              bottomProps={{
                color: colors.grey600,
                typography: 't5',
                fontWeight: 'bold',
              }}
            />
          }
          right={<Icon name="icon-check" size={30} />}
        />
      </List>
      <FixedBottomCTA onClick={() => router.push('/property-type')}>기술과제 시작하기</FixedBottomCTA>
    </>
  );
}
