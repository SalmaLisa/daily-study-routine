import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Header from '../Header/Header';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Subject from '../Subject/Subject';
import './Main.css'

const Main = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
    .then(data => setSubjects(data))
  },[])
  return (
    <div className='main'>
      <div className='routine-container'>
        <Header></Header>
        <div className='subject-container'>
          {
            subjects.map(subject=><Subject subject={subject} key={subject.id}></Subject>)
          }
        </div>
      </div>
      <div className='side-part'>
        <PersonalInfo></PersonalInfo>
      </div>
    </div>
  );
};

export default Main;