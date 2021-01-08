import React from 'react';
import tw, { css, styled } from 'twin.macro';

export const Button = styled.a<{
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSmall?: boolean;
}>(({ isPrimary, isSecondary, isSmall }) => [
  // The common button styles added with the tw import
  tw`mb-2 w-full`,
  tw`border border-transparent rounded-md`,
  tw`inline-flex items-center justify-center`,
  tw`sm:w-auto`,

  // Use the variant grouping feature to add variants to multiple classes
  // hocus means hover + focus
  tw`hocus:(underline)`,

  // Use props to conditionally style your components
  isPrimary && tw`bg-blue-600 text-white hocus:(bg-blue-700)`,

  // Combine regular css with tailwind classes within backticks
  isSecondary && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`bg-white text-gray-700 hocus:(bg-gray-200)`,
  ],

  // Conditional props can be added
  isSmall ? tw`text-sm py-1 px-3` : tw`text-base py-3 px-5`,
]);
