import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBotPoint, setUserPoint } from '../actions';
import Card from './Card';
import ComputerCard from './ComputerCard';

export default function Game () {
  const choices = useSelector(store => store.choices);
  const userPoints = useSelector(store => store.userPoints);
  const botPoints = useSelector(store => store.botPoints);
  const [userCard, setUsercard] = useState({});
  const [botCard, setBotcard] = useState({});

  const dispatch = useDispatch();

  const calculate = () => {
    dispatch(setUserPoint())
    dispatch(setBotPoint())
  }

  useEffect(() => {
    const userRandomCard = choices[Math.floor(Math.random() * choices.length)];
    setUsercard(userRandomCard);
    const botRandomCard = choices[Math.floor(Math.random() * choices.length)];
    setBotcard(botRandomCard);
  }, [])

  return (
    <div style={{display: 'flex'}}>
      <p>User's point: {userPoints}</p>
      <p>Bot's point: {botPoints}</p>
      <Card name={userCard.name} />
      <ComputerCard name={botCard.name} calculate={calculate} />
    </div>
  )
}