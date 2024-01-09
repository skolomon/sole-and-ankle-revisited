import React from 'react';
import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';
import { COLORS, QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const GlobalStyles = createGlobalStyle`
  html {
    --color-white: ${COLORS.white};
    --color-white-always: ${COLORS.white};
    --color-black: black;

    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};

    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};

    --color-overlay-angle: 220deg;
    --color-overlay-intensity: 6% 40%;
    --color-overlay-opacity: 80%;
    
    background: var(--color-white);
    color: var(--color-black);
    @media (prefers-color-scheme: dark) {
      --color-white: black;
      --color-black: ${COLORS.white};

      --color-gray-100: ${COLORS.gray[900]};
      --color-gray-300: ${COLORS.gray[700]};
      --color-gray-500: ${COLORS.gray[500]};
      --color-gray-700: ${COLORS.gray[300]};
      --color-gray-900: ${COLORS.gray[100]};

      --color-primary: ${COLORS.primary};
      --color-secondary: ${COLORS.secondary};

    }
  }
`;

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
  @media ${QUERIES.tablet} {
    padding-block: 48px;
  }
  @media ${QUERIES.phone} {
    padding-block: 40px;
  }
`;

export default App;
