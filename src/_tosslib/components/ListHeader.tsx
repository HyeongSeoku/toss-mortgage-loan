import { Text } from '_tosslib/components';

interface ListHeaderProps {
  className?: string;
  children?: string;
}

const ListHeader = ({ className, children }: ListHeaderProps) => {
  return (
    <li className={className} css={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text typography="t5" fontWeight="bold" ellipsisAfterLines={1}>
        {children}
      </Text>
    </li>
  );
};

export default ListHeader;
