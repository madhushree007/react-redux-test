import './Game/game.scss';
export default function ScoreBoard ({handleGameRestart}) {

  return (
    <div className='modal'>
        <div className='modal-content'>
          Congratulation you are the winner!
          <button onClick={handleGameRestart}>Start Again</button>
        </div>
    </div>
  )
}