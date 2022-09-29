import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './StudyDetails.css'

const StudyDetails = ({ studyDuration, breakTime }) => {
  const notify = () => toast("Wow ! You've completed today's routine.");
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
      <button onClick={notify} className='completed-btn'>Routine Completed</button>
      <ToastContainer  toastStyle={{ backgroundColor: "#a153e9",color:"white",height:"150px",fontWeight:"600",fontSize:"17px" }}/>
    </div>
  );
};

export default StudyDetails;