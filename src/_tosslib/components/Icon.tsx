export default function Icon({ name, size, className }: { name: string; size: number; className?: string }) {
  return (
    <img alt="" src={`https://static.toss.im/icons/svg/${name}.svg`} width={size} height={size} className={className} />
  );
}
