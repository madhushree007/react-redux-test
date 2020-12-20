import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch } from 'react-redux';
import { setCardFlip } from '../../actions';

export default function Card ({name}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(isFlipped => !isFlipped);
    dispatch(setCardFlip(true));
  }

  useEffect(() => {
    setIsFlipped(false);
  }, [])
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src={"/assets/cardBg.jpg"} alt='bg' onClick={handleClick} />
        </div>
 
        <div>
          <img src={`/assets/${name}.jpg`} alt='front' />
        </div>
      </ReactCardFlip>
  )
  }