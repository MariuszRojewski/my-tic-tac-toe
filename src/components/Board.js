import React from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }

  return null;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      boolenXO: true,
      winner: null,
    };
  }

  handleClick(squareID) {
    const squares = [...this.state.squares];
    if (calculateWinner(squares) || squares[squareID]) return;
    squares[squareID] = this.state.boolenXO ? "X" : "O";

    this.setState({
      squares: squares,
      boolenXO: !this.state.boolenXO,
    });
  }

  render() {
    let isWinner = calculateWinner(this.state.squares);
    let winner = "";
    let winnerSquares = null;
    const gameBoard = [...this.state.squares];
    if (isWinner) {
      winner = isWinner[0];
      winnerSquares = isWinner[1];
    }

    if (winnerSquares) {
      winnerSquares.forEach((element) => {
        const abc = document.querySelectorAll(".sqaure");
        abc[element].classList.add("winner");
        // console.log(gameBoard[element]);
      });
    }
    return (
      <div className="board">
        <h2>Board</h2>
        <div className="board_squares">
          {gameBoard.map((name, index) => (
            <Square
              key={"square_" + index}
              index={index}
              onClick={() => this.handleClick(index)}
              value={this.state.squares[index]}
            />
          ))}
        </div>
        <h3>
          {/* COS TU NIE DO KONCA DZIAŁA POKAZANIE WYGRANEGO! */}
          {winner ? `The winner is "${winner}"` : ""}
        </h3>
      </div>
    );
  }
}

export default Board;
