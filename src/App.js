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
  state = {
    board: [[]],
    width: 10,
    height: 10,
    chance: 10
  }

  componentDidMount() { this.newGame() }
  newGame = () => {
    this.setState(prevState => {
      return {
        emptyFields: prevState.width * prevState.height
      }
    }, () => {
      this.setState({
        gameState: 'playing',
        board: this.genBoard(
          this.state.width,
          this.state.height,
          this.state.chance
        )
      })
    })
  }

  checkField = (position, board = this.state.board) => {
    const x = position[0]
    const y = position[1]
    this.setState(prevState => {
      if (prevState.emptyFields === 1) {
        return {
          emptyFields: prevState.emptyFields - 1,
          gameState: 'Won'
        }
      }
      return { emptyFields: prevState.emptyFields - 1 }
    })
    if (board[x][y].open) {
      return board[x][y].open
    }

    const bombs = this.countBombs(position, board)
    board[x][y].open = bombs
    return board
  }

  revealField = (position, board = this.state.board) => {
    const x = position[0]
    const y = position[1]

    board = this.checkField(position, board)
    if (board[x][y].bomb) {
      this.revealBoard('lost')
    }
    if (board[x][y].open === "0") {
      this.openNeighbours(position, board)
    }

    this.setState(prevState => {
      return { board, counter: prevState.counter + 1 }
    })
  }

  revealBoard(gameState) {
    this.setState(prevState => {
      return {
        gameState,
        board: prevState.board.map(row => row.map(field => (
          field.open = this.countBombs(field.position, prevState.board)
        )))
      }
    })
  }

  openNeighbours(position, board) {
    const x = position[0]
    const y = position[1]
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (0 <= i && i < this.state.width && 0 <= j && j < this.state.height) {
          if (!board[i][j].open) {
            this.revealField([i, j], board)
          }
        }
      }
    }
  }

  countBombs(position, board) {
    const x = position[0]
    const y = position[1]
    if (board[x][y].bomb) {
      return true
    }
    let bombs = 0
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (0 <= i && i < this.state.width && 0 <= j && j < this.state.height) {
          if (board[i][j].bomb) {
            bombs++
          }
        }
      }
    }
    return bombs.toString()
  }

  genField(x, y, chance) {
    const bomb = (Math.random() < chance / 100)
    if (bomb) {
      this.setState(prevState => {
        return { emptyFields: prevState.emptyFields - 1 }
      })
    }

    return {
      bomb,
      open: false,
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
    const { board, emptyFields, gameState } = this.state

    return (
      <Board>
        <Title>To go: {emptyFields} fields</Title>
        {gameState === 'playing' ?
          <div /> :
          <div>
            <h1>{gameState}</h1>
            <button onClick={this.newGame}>new game</button>
          </div>
        }
        {board.map((row, i) =>
          <Row row={row} key={i} reveal={this.revealField}></Row>
        )}
      </Board>
    )
  }
}

export default App;
