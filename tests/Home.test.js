import React from 'react'
import Home from '../src/Components/Home.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  global.fetch = jest.fn(() => Promise.resolve(null).catch())
  const tree = renderer
    .create(<Home />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
