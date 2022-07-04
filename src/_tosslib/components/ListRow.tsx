import { ComponentProps, ReactNode } from 'react';
import Text from './Text';
import { css } from '@emotion/react';
import Icon from '_tosslib/components/Icon';

interface ListRowProps {
  className?: string;
  contents: ReactNode;
  right?: ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
}

const ListRow = ({ className, contents, right, withArrow, onClick }: ListRowProps) => {
  return (
    <li
      className={className}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
      onClick={onClick}
    >
      {contents}
      {right}
      {withArrow ? <Icon name="icon-arrow-right-mono" size={24} /> : undefined}
    </li>
  );
};

interface Text2RowsProps {
  top: string;
  topProps?: ComponentProps<typeof Text>;
  bottom: string;
  bottomProps?: ComponentProps<typeof Text>;
}
ListRow.Text2Rows = ({ top, topProps, bottom, bottomProps }: Text2RowsProps) => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <Text {...topProps}>{top}</Text>
      <Text {...bottomProps}>{bottom}</Text>
    </div>
  );
};

interface Text1RowProps {
  top: string;
  topProps?: ComponentProps<typeof Text>;
}
ListRow.Text1Row = ({ top, topProps }: Text1RowProps) => {
  return <Text {...topProps}>{top}</Text>;
};

export default ListRow;
