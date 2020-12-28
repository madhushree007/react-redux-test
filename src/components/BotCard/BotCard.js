import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useSelector } from 'react-redux';

export default function BotCard ({name, calculate}) {
  const gameLeft = useSelector(store => store.gameLeft);
  const [isFlipped, setIsFlipped] = useState(false);
  const isCardFlipped = useSelector(store => store.isCardFlipped);

  useEffect(() => {
    setIsFlipped(false);

    if(isCardFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
        calculate(); 
      }, 600);
      return () => clearTimeout(timer);
    }
}, [isCardFlipped, gameLeft, calculate])

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