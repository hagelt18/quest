import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders chest', () => {
  const app = render(<App />);
  const chestElement = app.findByAltText('chest');
  expect(chestElement).toBeInTheDocument();
});
