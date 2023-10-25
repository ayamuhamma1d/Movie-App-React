import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders loading spinner when loading prop is true', () => {
    const { getByTestId } = render(<Loader loading={true} />);
    const loadingSpinner = getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('renders error message when error prop is provided', () => {
    const error = {
      message: 'An error occurred',
    };
    const { getByText } = render(<Loader error={error} />);
    const errorMessage = getByText('An error occurred');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders children when loading and error props are false', () => {
    const { getByText } = render(<Loader loading={false} error={null}>Hello World</Loader>);
    const childElement = getByText('Hello World');
    expect(childElement).toBeInTheDocument();
  });
});