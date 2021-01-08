import React from 'react';
import classNames from 'classnames';

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    isPrimary?: boolean;
    isSecondary?: boolean;
    isSmall?: boolean;
  }
> = ({ isPrimary, isSecondary, isSmall, children, ...props }) => (
  <a
    className={classNames(
      'mb-2 w-full border border-transparent rounded-md inline-flex items-center justify-center sm:w-auto hover:underline focus:underline',
      {
        'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': isPrimary,
        'bg-white text-gray-700 hover:bg-gray-200 focus:bg-gray-200': isSecondary,
        'text-sm py-1 px-3': isSmall,
        'text-base py-3 px-5': !isSmall,
      },
    )}
    style={{
      boxShadow: isSecondary ? '0 0.1em 0 0 rgba(0, 0, 0, 0.25)' : undefined,
    }}
    {...props}
  >
    {children}
  </a>
);
