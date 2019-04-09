import React from 'react'
import { getByTestId } from 'dom-testing-library'

export default function Display(props) {
    return (
      <div>
        <h4>Balls: {props.ball}</h4>
        <h4 data-testid='strike-count'>Strikes: {props.strike}</h4>
      </div>
    )
  }
