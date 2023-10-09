import React, {useState, useEffect} from 'react'

function Tic_Tac_Toe() {
  const [content1, setContent1] = useState('')
  const [content2, setContent2] = useState('')
  const [content3, setContent3] = useState('')
  const [content4, setContent4] = useState('')
  const [content5, setContent5] = useState('')
  const [content6, setContent6] = useState('')
  const [content7, setContent7] = useState('')
  const [content8, setContent8] = useState('')
  const [content9, setContent9] = useState('')

  const [winner, setWinner] = useState('')
  const [round, setRound] = useState(1)
  const [x_score, setXscore] = useState(0)
  const [o_score, setOscore] = useState(0)

  const [turn, setTurn] = useState('X')
  const [game_finish, setGamefinish] = useState(false)
  const [able, setAble] = useState(true)

  let list = [content1, content2, content3, content4, content5, content6, content7, content8, content9]

  useEffect(() => {
    check()
  }, list)

  const contentChange = () => {
    setContent1('')
    setContent2('')
    setContent3('')
    setContent4('')
    setContent5('')
    setContent6('')
    setContent7('')
    setContent8('')
    setContent9('')
  }
  const next_round = () => {
    setAble(true)
    setGamefinish(false)
    setRound(prevnum => prevnum + 1);
    setTurn('X')
    setWinner('')
    contentChange()
  }

  const reset = () => {
    contentChange()
    setWinner('')
    setGamefinish(false)
    setTurn('X')
    setAble(true)
  }

  const replay = () => {
    setAble(true)
    contentChange()
    setTurn('X')
    setWinner('')
    setGamefinish(false)
    setXscore(0)
    setOscore(0)
    setRound(1)
  }

  const check = () => {
    let x_indices = [];
    let o_indices = [];
  
    list.forEach((content, index) => {
      if (content === 'X') {
        x_indices.push(index + 1);
      } else if (content === 'O') {
        o_indices.push(index + 1);
      }
    });
  
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
  
    if (winningCombinations.some(combination => arrayContainsArray(x_indices, combination))) {
      setWinner('X WIN');
      setXscore(prevscore => prevscore + 1);
      setGamefinish(true);
      setAble(false);
    }

    else if (winningCombinations.some(combination => arrayContainsArray(o_indices, combination))) {
      setWinner('O WIN');
      setOscore(prevscore => prevscore + 1);
      setGamefinish(true);
      setAble(false);
    }
    else if (list.every(content => content !== '')) {
      setWinner('Draw');
      setGamefinish(true);
      setAble(false);
    }
  };
  
  // Helper function to check if an array contains another array
  const arrayContainsArray = (superset, subset) => {
    return subset.every(value => superset.includes(value));
  };
  
  const playing1 = () => {
    if (content1 === '' && !game_finish) {
      setContent1(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  

  const playing2 = () => {
    if (content2 === '' && !game_finish) {
      setContent2(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  

  const playing3 = () => {
    if (content3 === '' && !game_finish) {
      setContent3(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  

  const playing4 = () => {
    if (content4 === '' && !game_finish) {
      setContent4(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  
  const playing5 = () => {
    if (content5 === '' && !game_finish) {
      setContent5(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  
  const playing6 = () => {
    if (content6 === '' && !game_finish) {
      setContent6(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  
  const playing7 = () => {
    if (content7 === '' && !game_finish) {
      setContent7(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };
  
  const playing8 = () => {
    if (content8 === '' && !game_finish) {
      setContent8(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };

  const playing9 = () => {
    if (content9 === '' && !game_finish) {
      setContent9(prevContent => {
        if (turn === 'X') {
          setTurn('O');
          return 'X';
        } else if (turn === 'O') {
          setTurn('X');
          return 'O';
        }
      });
    }
  };

  return (
    <div className='app'>
      <div className='winner_name'>
        <p>{winner}</p>
      </div>
      <div className='game'>
          <span className='span_1' onClick={() => playing1()}>{content1}</span>
          <span className='span_2' onClick={() => playing2()}>{content2}</span>
          <span className='span_3' onClick={() => playing3()}>{content3}</span>

          <span className='span_4' onClick={() => playing4()}>{content4}</span>
          <span className='span_5' onClick={() => playing5()}>{content5}</span>
          <span className='span_6' onClick={() => playing6()}>{content6}</span>

          <span className='span_7' onClick={() => playing7()}>{content7}</span>
          <span className='span_8' onClick={() => playing8()}>{content8}</span>
          <span className='span_9' onClick={() => playing9()}>{content9}</span>
      </div>

      <div className='buttons'>
        <button disabled={able} onClick={() => next_round()}>Next Round</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => replay()}>Replay</button>
      </div>

      <div className='result'>
        <p>Round : {round}</p>
        <span>X : {x_score}</span><br></br>
        <span>O : {o_score}</span>
      </div>


    </div>
  )
}

export default Tic_Tac_Toe