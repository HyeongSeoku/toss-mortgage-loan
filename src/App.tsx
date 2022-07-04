import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import { GlobalPortal } from './GlobalPortal';

import '_tosslib/sass/app.scss';
import { PageLayout } from 'pages/PageLayout';
import { Routes } from 'pages/Routes';

export default function App() {
  return (
    <GlobalPortal.Provider>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
          }
        `}
      />
      <PageLayout>
        <Routes />
      </PageLayout>
    </GlobalPortal.Provider>
  );
}
