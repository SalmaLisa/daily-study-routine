import React from 'react';
import './Subject.css'

const Subject = ({ subject,addBtnClickHandler }) => {
  const { img, activity, duration } = subject;
  return (
    <div className='subject'>
      <div className='img-container'>
      <img className='img-fluid' src={img} alt="" />
      </div>
      <div className='activities-info'>
      <h4>{activity}</h4>
      <p>Duration : {duration} min</p>
      </div>
      <button onClick={()=>addBtnClickHandler(duration)} className='add-Btn'>Completed</button>
    </div>
  );
};

export default Subject;