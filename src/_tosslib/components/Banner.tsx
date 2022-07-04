import { css } from '@emotion/react';
import { Text } from '_tosslib/components';
import { colors } from '_tosslib/constants/colors';

export default function Banner({
  className,
  iconSrc,
  top,
  bottom,
}: {
  className?: string;
  iconSrc: string;
  top: string;
  bottom?: string;
}) {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        align-items: center;
        background-color: ${colors.grey100};
        border-radius: 20px;
        padding: 24px;
      `}
    >
      <img alt="" src={iconSrc} css={{ width: 40, height: 40 }} />
      <div css={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
        <Text color="rgb(51, 61, 75)" typography="t4" fontWeight="bold">
          {top}
        </Text>
        {bottom ? (
          <Text color={colors.grey700} typography="t6" fontWeight="regular">
            {bottom}
          </Text>
        ) : undefined}
      </div>
    </div>
  );
}
