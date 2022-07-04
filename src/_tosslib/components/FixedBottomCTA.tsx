import { ComponentProps, ComponentType } from 'react';
import Button from '_tosslib/components/Button';
import { GlobalPortal } from '../../GlobalPortal';
import { css } from '@emotion/react';

type TypeAProps = ComponentProps<typeof Button>;
function TypeA(props: TypeAProps) {
  return (
    <GlobalPortal.Consumer>
      <div
        css={css`
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        `}
      >
        <div
          css={css`
            padding: 0 20px 18px;
          `}
        >
          <Button {...props} />
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
}

type TypeBProps = {
  leftButton: React.ReactNode;
  rightButton: React.ReactNode;
};
function TypeB({ leftButton, rightButton }: TypeBProps) {
  return (
    <GlobalPortal.Consumer>
      <div
        css={css`
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        `}
      >
        <div
          css={css`
            padding: 0 20px 18px;
            display: flex;

            > :nth-of-type(1) {
              margin-right: 8px;
            }
          `}
        >
          {leftButton}
          {rightButton}
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
}

const FixedBottomCTA = TypeA as ComponentType<TypeAProps> & { TypeB: ComponentType<TypeBProps> };
FixedBottomCTA.TypeB = TypeB;

export default FixedBottomCTA;
