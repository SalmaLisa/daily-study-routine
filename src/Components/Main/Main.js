import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import QuestionsAnswer from '../Accordion/Accordion';
import Header from '../Header/Header';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Subject from '../Subject/Subject';
import './Main.css'

const Main = () => {
  const [subjects, setSubjects] = useState([]);
  const [studyDuration, setStudyDuration] = useState(0);
  const [breakTime, setBreakTime] = useState([]);
  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
      .then(data => setSubjects(data))
  }, []);
  useEffect(() => {
    const storedBreakTime = localStorage.getItem('study-break');
    setBreakTime(storedBreakTime);
  }, []);

  const addBtnClickHandler = selectedDuration => {
    const totalStudyTime = parseInt(studyDuration) + parseInt(selectedDuration);
    setStudyDuration(totalStudyTime)
  }

  const breakTimeAdd = breakDuration => {
    localStorage.setItem('study-break', breakDuration);
    setBreakTime(breakDuration)
  }
  return (
    <div>
      <div className='main'>
      <div className='routine-container'>
        <Header></Header>
        <div className='subject-container'>
          {
            subjects.map(subject => <Subject
              subject={subject}
              key={subject.id}
              addBtnClickHandler={addBtnClickHandler}
            ></Subject>)
          }
        </div>
      </div>
      <div className='side-part'>
        <PersonalInfo
          studyDuration={studyDuration}
          breakTimeAdd={breakTimeAdd}
          breakTime={breakTime}
        ></PersonalInfo>
      </div>
      </div>
      <div className='accordion-container'>
        <h1 className='accordion-title'>Important Questions</h1>
        <QuestionsAnswer></QuestionsAnswer>
      </div>
    </div>
  );
};

export default Main;