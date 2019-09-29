import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
describe('genField', () => {
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('generates an empty field', () => {
    expect(wrapper.instance().genField(0, 0, 0)).toEqual(
      {
        bomb: false,
        open: false,
        position: [0, 0]
      }
    )
  })

  it('generates a field wth bomb', () => {
    expect(wrapper.instance().genField(1, 1, 100)).toEqual(
      {
        bomb: true,
        open: false,
        position: [1, 1]
      }
    )
  })
})

describe('genBoard', () => {
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('generates a board', () => {
    expect(wrapper.instance().genBoard(1, 1, 0)).toEqual(
      [[{
        bomb: false,
        open: false,
        position: [0, 0]
      }]]
    )
  })

  it('generates a 10 x 10 board', () => {
    const size = 10
    const board = wrapper.instance().genBoard(size, size, 0)
    expect(board.length).toEqual(size)
    expect(board[0].length).toEqual(size)
  })
})

describe('countBombs', () => {
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('finds 0 bombs on empty board', () => {
    const board = wrapper.instance().genBoard(3, 3, 0)
    expect(wrapper.instance().countBombs([1, 1], board)).toEqual('0')
  })

  it('finds bombs on full board', () => {
    let board = wrapper.instance().genBoard(3, 3, 100)
    board[0][0].bomb = false
    board[1][1].bomb = false
    expect(wrapper.instance().countBombs([0, 0], board)).toEqual('2')
    expect(wrapper.instance().countBombs([1, 1], board)).toEqual('7')
    expect(wrapper.instance().countBombs([2, 2], board)).toEqual(true)
  })
})
