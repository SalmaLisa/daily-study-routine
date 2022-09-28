import React from 'react';
import './PersonalInfo.css'
import img from '../../avatar.png'
import Break from '../Break/Break';
import StudyDetails from '../StudyDetails/StudyDetails';

const PersonalInfo = () => {
  return (
    <div className='side-section'>
      <div className='personal-info'>
        <img className='avatar' src={img} alt="" />
        <div>
          <p className='info'>Sabina Yasmin</p>
          <p className='info'>Class : X</p>
      </div>
      </div>
      <Break></Break>
      <StudyDetails></StudyDetails>
   </div>
  );
};

export default PersonalInfo;