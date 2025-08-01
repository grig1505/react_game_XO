import { useState} from "react";
import GameLayout from "./GameLayout";
function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(['','','','','','','','','']);


  function resetG() {
    setCurrentPlayer("X");
    setIsGameEnded();
    setIsDraw();
    setField(['','','','','','','','','']);
  }
 
  
    return (
        <div className="centers">
         <GameLayout 
         currentPlayer={currentPlayer}
         isGameEnded={isGameEnded}
         isDraw={isDraw}
         setIsDraw={setIsDraw}
         field={field}
         setCurrentPlayer={setCurrentPlayer}
         setField={setField}
         setIsGameEnded={setIsGameEnded}
         />
        {(isGameEnded || isDraw) && (
				<button onClick={resetG}>Начать заново</button>
			  )}
        </div>
    );
}

export default Game;
