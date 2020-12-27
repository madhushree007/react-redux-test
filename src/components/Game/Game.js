import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, resetBotPoints, resetGameLeft, resetUserPoints, setBotPoint, setCardFlip, setGameLeft, setUserPoint } from '../../actions';
import BotCard from '../BotCard/BotCard';
import Card from '../Card/Card';
import ScoreBoard from '../ScoreBoard';
import './game.scss';

export default function Game () {
  const user = useSelector(store => store.username);
  const choices = useSelector(store => store.choices);
  const userPoints = useSelector(store => store.userPoints);
  const botPoints = useSelector(store => store.botPoints);
  const gameLeft = useSelector(store => store.gameLeft);

  const [isNext, setIsNext] = useState(false);
  const [winner, setWinner] = useState(false);
  const [userCard, setUsercard] = useState({});
  const [botCard, setBotcard] = useState({});

  const dispatch = useDispatch();

  const calculate = () => {
    setIsNext(true);
    if(userCard.point > botCard.point) {
      dispatch(setUserPoint())
    } else if(userCard.point < botCard.point) {
      dispatch(setBotPoint())
    }
  }

  const handleGame = () => {
    if(gameLeft === 1) {
      setWinner(true);
    }
    dispatch(setGameLeft())
    dispatch(setCardFlip(false))
  }

  const handleGameRestart = () => {
    dispatch(resetGameLeft())
    dispatch(resetUserPoints())
    dispatch(resetBotPoints())
    setWinner(false);
  }

  useEffect(() => {
    const userRandomCard = choices[Math.floor(Math.random() * choices.length)];
    setUsercard(userRandomCard);
    const botRandomCard = choices[Math.floor(Math.random() * choices.length)];
    setBotcard(botRandomCard);
    setIsNext(false);
  }, [gameLeft])

  return (
    <div className='game'>
      <div className='gameHeader'>
        <h2>Hello {user}!</h2>
        <h5 className='logout' onClick={() => dispatch(logOut())}>Logout</h5>
      </div>
      
      <h3>Let's play card game with computer.</h3>
      <p>To start the game click on your card and then computer will reveal it's card, whoever's card is bigger gets one point. In case both gets same card, no one get any point. There are 5 turns.</p>
      <p>{gameLeft === 0 ? 'Game over' : `Game left ${gameLeft}`}</p>

      <div className='cards'>
        <div>
          <p className='points'>Your points: {userPoints}</p>
          <Card name={userCard.name} />
        </div>
        <div>
          <p className='points'>Computer's points: {botPoints}</p>
          <BotCard name={botCard.name} calculate={calculate} />
        </div> 
          
      </div>

      <div className='footer'>
        {isNext ? <button onClick={handleGame} className='nextBtn'>Next</button> : '' }
      </div>
     {winner ? <ScoreBoard handleGameRestart={handleGameRestart} /> : '' }
     
    </div>
  )
}