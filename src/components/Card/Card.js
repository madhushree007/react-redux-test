import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';
import { setCardFlip } from '../../actions';

export default function Card ({name}) {
  const gameLeft = useSelector(store => store.gameLeft);
  const [isFlipped, setIsFlipped] = useState(false);

  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(true);
    dispatch(setCardFlip(true));
  }

  useEffect(() => {
    setIsFlipped(false);
  }, [gameLeft])
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src={"../../assets/cardBg.jpg"} alt='bg' onClick={handleClick} />
        </div>
 
        <div>
          <img src={`../../assets/${name}.jpg`} alt='front' />
        </div>
      </ReactCardFlip>
  )
  }