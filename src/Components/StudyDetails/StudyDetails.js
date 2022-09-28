import React from 'react';
import './StudyDetails.css'

const StudyDetails = () => {
  return (
    <div className='details-section'>
      <p className='heading'>Study Details</p>
      <div className='study-details'>
        <small>Total Study Time : </small>
        <small>min</small>
      </div>
      <div className='break-time'>
        <small>Break Time : </small>
        <small>min</small>
      </div>
      <button className='completed-btn'>Routine Completed</button>
    </div>
  );
};

export default StudyDetails;