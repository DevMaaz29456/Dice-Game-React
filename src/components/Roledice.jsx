import { useState } from "react";
import styled from "styled-components";

const Roledice = ({ roleDice, currentDice }) => {


  return (
    <Dicecontainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} alt={`dice-${currentDice}`} />
        <p>Click on Dice to roll</p>
      </div>
    </Dicecontainer>
  );
};

export default Roledice;

const Dicecontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  .dice {
    cursor: pointer;
    text-align: center;
  }

  

  p {
    font-size: 24px;
    margin-top: 16px; 
  }
`;
