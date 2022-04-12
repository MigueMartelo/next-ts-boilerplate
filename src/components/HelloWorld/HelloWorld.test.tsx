import { render, screen } from '@testing-library/react';
import HelloWorld from '.';

describe('HelloWorld', () => {
  test('should render the component', () => {
    render(<HelloWorld />);
    expect(screen.getByText('HelloWorld')).toBeInTheDocument();
  });
});
