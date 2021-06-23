import React from 'react';
import { render } from '@testing-library/react';
import { BasicDarkPalette } from './dark-palette.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDarkPalette />);
  const rendered = getByText('hello from DarkPalette');
  expect(rendered).toBeTruthy();
});
