import React from 'react';
import { GlobalStyles } from 'twin.macro';

export const Layout: React.FC = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
);
