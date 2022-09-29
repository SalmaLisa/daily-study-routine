import { faBook, faBookAtlas, faBookOpen, faBookOpenReader, faCab } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'


const Header = () => {
  return (
    <div>
      <div className='header'>
      <FontAwesomeIcon className='icon' icon={faBookOpen}/>
      <h1 className='title'>Daily Study Routine</h1>
    </div>
    <h4 className='semi-title mt-4 mb-3'>Select Completed Subject</h4>
    </div>
  );
};

export default Header;