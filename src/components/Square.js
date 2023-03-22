import React from 'react'

const Square = ({value, index, checkTurn}) => {

  const handleTurn = () =>{
    checkTurn(index)
  }
  return (
    
    <div className="square" onClick={handleTurn}>{value}</div>
  )
}
export default Square
