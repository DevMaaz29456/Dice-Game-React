import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice 
           <p>if you get wrong guess then  2 point will be dedcuted </p> 
        </p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
background-color: #FBf1f1;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;   
border-radius: 10px;
padding: 20px;
h2{
    font-size: 24px;

}
.text{
    margin-top: 24px;
}

`;
