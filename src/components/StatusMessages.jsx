import React from 'react';

const StatusMessages = ({ winner, current }) => {
    
    const noMovesLeft = current.board.every(el => el! == null)
    return (
        <h2>
            {winner && `Winner is ${winner}`}
            {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
            {!winner && noMovesLeft && `x and o tied`}
        </h2>
    );
};

export default StatusMessages;
