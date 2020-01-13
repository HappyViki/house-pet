import React from 'react'
import Card from 'Components/Card.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Card key='1' id='687845' src='image.png' distance='6.254' url='website.com' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
