import React from "react";
import Board from "./features/Board";
import SignName from "./features/SignName";

function App() {

  return (
    <React.Fragment>
      <div className='d-flex'>
        <div className='col-3' style={{height: '100vh'}}>
          <SignName />
        </div>
        <div className='col-9' style={{height: '100vh'}}>
          <Board />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
