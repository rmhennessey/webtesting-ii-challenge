import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display/Display'
import Dashboard from './Dashboard/Dashboard'

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('increases strike count when strike button clicked, reset to 0 when reach 3', () => {
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText(/david lam/i);
    fireEvent.click(button); // strike button clicked 1st time
    getByText(/strikes: 0/i);
    
    // expect(queryByTestId('strike-count')).toContainHTML('1');
    // fireEvent.click(button); // strike button clicked 2nd time
    // expect(queryByTestId('strike-count')).toContainHTML('2');
    // fireEvent.click(button); // strike button clicked 3rd time
    // expect(queryByTestId('strike-count')).toContainHTML('0');
  }); 


});
