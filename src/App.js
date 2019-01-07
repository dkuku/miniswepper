import React, { Component } from 'react';
import styled from 'styled-components'
import Row from './components/Row'

const Board = styled.div`
  max-width: 1200px;
`
const Title = styled.p`
  background: yellow;
  text-align: center;
  width:100%;
`
class App extends Component {
  state = { board: [[]],
            width: 15,
            height: 15 }

  componentDidMount() {
    this.setState({
      board: this.genBoard(this.state.width, this.state.height, 0)
    })
  }

  revealField = (position) => {
    this.setState(prevState => {
      let newBoard = Array.from(prevState.board)
      newBoard[position[0]][position[1]].open = this.countBombs(position)
      return { board: newBoard }
    })
  }

  countBombs(position) {
    const x = position[0]
    const y = position[1]
    if (this.state.board[x][y].bomb) {
      return true
    }
    let bombs = 0
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (0 <= i && i < this.state.width && 0 <= j && j < this.state.height) {
          if (this.state.board[i][j].bomb) {
            bombs++
          }
        }
      }
    }
    if (!bombs) {
      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (0 <= i && i < this.state.width && 0 <= j && j < this.state.height) {
            if (!this.state.board[i][j].open){
              this.revealField([i, j])
            }
          }
        }
      }
    }
    return bombs.toString()
  }

  genField(x, y, chance) {
    return {
      open: false,
      bomb: (Math.random() < chance / 100),
      position: [x, y]
    }
  }

  genBoard(width, height, chance) {
    return Array.from(Array(width), ((row, i) =>
      Array.from(Array(height), ((field, j) =>
        field = this.genField(i, j, chance))
      )
    )
    )
  }

  render() {
    const { board } = this.state
    return (
      <Board>
        <Title>Saper</Title>
        {board.map((row, i) =>
          <Row row={row} key={i} reveal={this.revealField}></Row>
        )}
      </Board>
    )
  }
}

export default App;
