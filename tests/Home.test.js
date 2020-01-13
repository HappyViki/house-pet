import React from 'react'
import Home from 'Components/Home.jsx'
import renderer from 'react-test-renderer'
import pets from 'petfinderpets.json'

it('renders correctly', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve(pets.animals)
    })
  })
  const tree = renderer
    .create(<Home />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
