import { colors } from '_tosslib/constants/colors';

export default function Border({ size }: { size: number }) {
  return (
    <div
      style={{
        flex: 'none',
        height: size,
        background: colors.greyBackground,
      }}
    />
  );
}
