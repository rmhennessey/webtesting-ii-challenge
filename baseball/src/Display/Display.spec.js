import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display.js'

describe('<Display />', () => {
  it('renders successfully', () => {
    render(<Display />)
  });

  it('renders an h4 with Balls', () => {
    const {getByText} = render(<Display />)

    getByText(/balls/i)
  })

  it('renders an h4 with Strikes', () => {
    const {getByText} = render(<Display />)

    getByText(/strikes/i)
  })

  it('renders a ball count', () => {
    const {getByText} = render(<Display ball='2'/>)

    getByText(/2/i)
  })

  it('renders a strike count', () => {
    const {getByText} = render(<Display strike='2'/>)

    getByText(/2/i)
  })

});