import React from 'react'
import Dashboard from 'Components/Dashboard.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Dashboard />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
