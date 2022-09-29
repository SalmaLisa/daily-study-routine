import React from 'react';
import './StudyDetails.css'

const StudyDetails = ({studyDuration,breakTime}) => {
  return (
    <div className='details-section'>
      <p className='heading'>Study Details</p>
      <div className='study-details'>
        <small>Total Study Time : </small>
        <small>{studyDuration} min</small>
      </div>
      <div className='break-time'>
        <small>Break Time : </small>
        <small>{breakTime} min</small>
      </div>
      <button className='completed-btn'>Routine Completed</button>
    </div>
  );
};

export default StudyDetails;