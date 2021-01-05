import React from 'react';
import { theme } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  body: {
    '--from-color': theme`colors.blue.500`,
    '--to-color': theme`colors.white`,
    backgroundImage: 'linear-gradient(var(--from-color), var(--to-color))',
    fontFamily: 'sans-serif',
  },
});

export const Layout: React.FC = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyle />
    {children}
  </div>
);
