import React, { useState, useEffect} from 'react'
import Square from './components/Square'
import './App.css'
import PlayersTurn from './components/PlayersTurn'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  
  const checkTurn = (index) => {
    //conditional statement to check if a player one
    if(calculateWinner(squares) !== null){
      //conditional state to display the right player that one 
     const winner = calculateWinner(squares) === "X" ? "Player One(X) won" : "Player Two(O) won"
      alert(winner)
    }else if(calculateWinner(squares) === null &&  turn >8){
      alert("Tie Game!")
    }else if (squares[index] === null) {
      // places an X if its player one and an O if its player 2
      const current = turn  % 2 === 0 ? "X" : "O"
      // Updating the data state
      squares[index] = current;
      //setting the current square that was clicked on to either an X or an O
      setSquares[index] = current
      // Adding 1 to count to switch turns 
      setTurn(turn+1)
    
  }
}
useEffect(()=>{
checkTurn()

},[squares, turn])

const playersTurn = (turn) => {
  if(turn%2 ===0){
    console.log(turn)
    return "Turn: Player 1"
  }else if(turn%2 !==0)
  return "Turn: Player 2"
  else{
    return "Only two players allowed"
  }

}
//the function that was given to check whether one player got 3 squares in a row 
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
      return squares[a];
    }
  }
  return null;
}
//funtion to reset game board
const resetGame = () => {
  setSquares(Array(9).fill(null))
  setTurn(0)
}
  return (
    <>
    <body>
      <h1>Tic Tac Toe</h1>
      <div className="TicTacBoard">
      {squares.map((value,index)=>{
        return(
          <Square 
          Key={index}
          value={value}
          index={index}
          checkTurn={checkTurn}
           />
        )
      })}
       <button className="myButton" onClick={resetGame}>Reset Game</button>
     </div>
     <PlayersTurn 
      playersTurn={playersTurn(turn)}
      turn={turn}
      />
     </body>
     
    </>
  )
}

export default App