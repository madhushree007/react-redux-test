import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useSelector } from 'react-redux';

export default function ComputerCard ({name, calculate}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isCardFlipped = useSelector(store => store.isCardFlipped);

  useEffect(() => {
    if(isCardFlipped) {
      const timer = setTimeout(() => {
      setIsFlipped(true);
      calculate();
      }, 1000);
      return () => clearTimeout(timer);
    }
  },[isCardFlipped])

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src={"/assets/cardBg.jpg"} alt='bg' />
        </div>
 
        <div>
          <img src={"/assets/cardFront.jpg"} alt='bg' />
        </div>
      </ReactCardFlip>
  )
  }