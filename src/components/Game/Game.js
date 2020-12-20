import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBotPoint, setUserPoint } from '../../actions';
import BotCard from '../BotCard/BotCard';
import Card from '../Card/Card';

export default function Game () {
  const choices = useSelector(store => store.choices);
  const userPoints = useSelector(store => store.userPoints);
  const botPoints = useSelector(store => store.botPoints);
  const [userCard, setUsercard] = useState({});
  const [botCard, setBotcard] = useState({});

  const dispatch = useDispatch();

  const calculate = () => {
    if(userCard.point > botCard.point) {
      dispatch(setUserPoint())
    } else if(userCard.point > botCard.point){
       dispatch(setBotPoint())
    }
  }

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    setUsercard(null);
    setBotcard(null);

    const userRandomCard = choices[Math.floor(Math.random() * choices.length)];
    setUsercard(userRandomCard);
    const botRandomCard = choices[Math.floor(Math.random() * choices.length)];
    setBotcard(botRandomCard);
  }

  return (
    <div style={{display: 'flex'}}>
      <p>User's point: {userPoints}</p>
      <p>Bot's point: {botPoints}</p>
      <Card name={userCard.name} />
      <BotCard name={botCard.name} calculate={calculate} />
    </div>
  )
}