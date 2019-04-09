import React from 'react';
import { render, fireEvent, getByDisplayValue } from 'react-testing-library';

import Dashboard from './Dashboard.js'

describe('<Dashboard />', () => {
  it('renders successfully', () => {
    render(<Dashboard />)
  });

  it('increases strike count when strike button clicked, reset to 0 when reach 3', () => {
    const { getByText, queryByTestId } = render(<Dashboard />);
    const button = getByText(/strike/i);
    fireEvent.click(button); // strike button clicked 1st time
    expect(queryByTestId('strike-count')).toEqual('1');
    fireEvent.click(button); // strike button clicked 2nd time
    expect(queryByTestId('strike-count')).toContainHTML('2');
    fireEvent.click(button); // strike button clicked 3rd time
    expect(queryByTestId('strike-count')).toContainHTML('0');
  }); 

});
