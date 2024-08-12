import styled from "styled-components";
import { Button } from "../Styled/Button";


const Startgame = ({toggle}) => {
  return (
    <Container>
<div>
<img src="/images/dices.png" alt="dices"/>
</div>    
  <div className="content">
        <h1>DICE GAME</h1>
    <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  );
}

export default Startgame;


// Define the styled components
const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
  
`;

