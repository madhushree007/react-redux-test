import { useSelector } from 'react-redux';
import './Game/game.scss';

export default function ScoreBoard ({handleGameRestart}) {
  const userPoints = useSelector(store => store.userPoints);
  const botPoints = useSelector(store => store.botPoints);
  return (
    <div className='modal'>
        <div className='modal-content'>
          <h3>{ userPoints > botPoints 
            ? 'Congratulation you won! 🎉  ' 
            : userPoints === botPoints 
                ? 'Its a draw!' 
                : 'Computer has won the game. Better luck next time!'

          }
          </h3>
          <div>
            <button className='nextBtn' onClick={handleGameRestart}>Start Again</button>
            </div>
        </div>
    </div>
  )
}