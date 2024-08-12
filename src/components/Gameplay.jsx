import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import Totalscore from './Totalscore';
import Roledice from './Roledice';
import { useState } from 'react';
import { Button, OutlineButton } from '../Styled/Button'; // Import OutlineButton if defined
import Rules from './Rules';

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, SetshowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <Totalscore score={score} />
        <NumberSelector 
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber} 
        />
      </div>
      <Roledice 
        currentDice={currentDice} 
        roleDice={roleDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button   onClick={() => SetshowRules(prev => !prev)}>
            {
                showRules ? "Hide" : "Show"
            }
            Show Rules</Button>
      </div>
{showRules &&    <Rules/>}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.div`
  padding-top: 10px;

  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: flex-end; 
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }
`;
