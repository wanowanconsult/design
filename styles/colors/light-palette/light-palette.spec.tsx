import React from 'react';
import { render } from '@testing-library/react';
import { BasicLightPalette } from './light-palette.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLightPalette />);
  const rendered = getByText('hello from LightPalette');
  expect(rendered).toBeTruthy();
});
