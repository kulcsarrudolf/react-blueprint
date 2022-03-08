import { render, screen } from '@testing-library/react';
import App from './App';

test('First Test', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Blueprint/i);
  expect(linkElement).toBeInTheDocument();
});
