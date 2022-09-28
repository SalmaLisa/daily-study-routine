import React from 'react';
import './Break.css'

const Break = () => {
  return (
    <div className='break'>
      <p className='heading'>Add a break</p>
      <div className='break-duration'>
        <button>10 min</button>
        <button> 20 min</button>
        <button>25 min</button>
        <button>30 min</button>
      </div>
    </div>
  );
};

export default Break;