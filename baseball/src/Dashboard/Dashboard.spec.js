import React from 'react';
import { render, fireEvent } from 'react-testing-library';


import Dashboard from './Dashboard.js'

describe('<Dashboard />', () => {
  it('renders successfully', () => {
    render(<Dashboard />)
  });

});
