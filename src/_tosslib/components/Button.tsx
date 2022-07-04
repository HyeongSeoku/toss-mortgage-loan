import { PropsWithChildren } from 'react';
import useId from '_tosslib/hooks/useId';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  type?: 'primary' | 'danger' | 'light' | 'dark';
  style?: 'fill' | 'outline' | 'weak' | 'flat';
  display?: 'inline' | 'block' | 'full';

  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;
function Button(props: Props) {
  const { type = 'primary', style = 'fill', display = 'inline', disabled, className, children, ...rest } = props;
  const buttonId = useId();

  return (
    <button
      id={buttonId}
      className={classNames(
        'button',
        'button--size-big',
        {
          [`button--type-${type}`]: type,
          [`button--style-${style}`]: style,
          [`button--display-${display}`]: display,
        },
        { disabled: disabled },
        className
      )}
      {...rest}
    >
      <span className="button__content">{children}</span>
    </button>
  );
}

export default Button;
