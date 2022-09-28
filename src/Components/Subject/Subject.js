import React from 'react';
import './Subject.css'

const Subject = ({ subject }) => {
  const { img, activity, duration } = subject;
  return (
    <div className='subject'>
      <img src={img} alt="" />
      <div className='activities-info'>
      <h3>{activity}</h3>
      <p>Duration : {duration}</p>
      </div>
      <button className='add-Btn'>Add to list</button>
    </div>
  );
};

export default Subject;