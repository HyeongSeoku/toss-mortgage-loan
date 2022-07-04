import { useRouter } from 'pages/routing';
import { Spacing, List, ListRow } from '_tosslib/components';
import { Top03 } from '_tosslib/components/Top';
import { colors } from '_tosslib/constants/colors';

export function RegionBasedAddressPage() {
  const router = useRouter();

  return (
    <>
      <Top03 color={colors.grey900}>{`주택담보대출을 받을\n지역을 알려주세요`}</Top03>
      <Spacing size={22} />
      <List>
        <ListRow
          contents={
            <ListRow.Text1Row
              top="코어시"
              topProps={{
                color: colors.grey700,
              }}
            />
          }
          withArrow
          onClick={() => router.push('/confirmation')}
        />
        <ListRow
          contents={
            <ListRow.Text1Row
              top="페이먼츠시"
              topProps={{
                color: colors.grey700,
                typography: 't5',
              }}
            />
          }
          withArrow
          onClick={() => router.push('/confirmation')}
        />
        <ListRow
          contents={
            <ListRow.Text1Row
              top="증권시"
              topProps={{
                color: colors.grey700,
                typography: 't5',
              }}
            />
          }
          withArrow
          onClick={() => router.push('/confirmation')}
        />
        <ListRow
          contents={
            <ListRow.Text1Row
              top="인슈어런스시"
              topProps={{
                color: colors.grey700,
                typography: 't5',
              }}
            />
          }
          withArrow
          onClick={() => router.push('/confirmation')}
        />
        <ListRow
          contents={
            <ListRow.Text1Row
              top="뱅크시"
              topProps={{
                color: colors.grey700,
                typography: 't5',
              }}
            />
          }
          withArrow
          onClick={() => router.push('/confirmation')}
        />
      </List>
    </>
  );
}
