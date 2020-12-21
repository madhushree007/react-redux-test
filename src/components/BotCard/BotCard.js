import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';

export default function BotCard ({name, calculate}) {
  const gameLeft = useSelector(store => store.gameLeft);
  const [isFlipped, setIsFlipped] = useState(false);
  const isCardFlipped = useSelector(store => store.isCardFlipped);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFlipped(false);

    if(isCardFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
        calculate(); 
      }, 1000);
      return () => clearTimeout(timer);
    }
}, [isCardFlipped, gameLeft])

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src={"/assets/cardBg.jpg"} alt='bg' />
        </div>
 
        <div>
          <img src={`/assets/bot/${name}.jpg`} alt='bg' />
        </div>
      </ReactCardFlip>
  )
  }