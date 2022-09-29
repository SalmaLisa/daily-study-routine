import React from 'react';
import './Break.css'

const Break = ({breakTimeAdd}) => {
  return (
    <div className='break'>
      <p className='heading'>Add a break</p>
      <div className='break-duration'>
        <button onClick={()=>breakTimeAdd(10)}>10 min</button>
        <button onClick={()=>breakTimeAdd(20)}>20 min</button>
        <button onClick={()=>breakTimeAdd(25)}>25 min</button>
        <button onClick={()=>breakTimeAdd(30)}>30 min</button>
      </div>
    </div>
  );
};

export default Break;