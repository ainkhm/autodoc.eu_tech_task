import React from 'react';
import { render } from '@testing-library/react';
import { Blob } from './Blob.component';

test('renders Blob component with correct fill and width', () => {
  const fill = 'blue';
  const width = '50px';

  const { getByTestId } = render(
    <Blob fill={fill} width={width} data-testid="blob" />
  );

  const svg = getByTestId('blob');

  expect(svg).toBeInTheDocument();
  expect(svg).toHaveAttribute('fill', fill);
  expect(svg).toHaveStyle(`width: ${width}`);
});
