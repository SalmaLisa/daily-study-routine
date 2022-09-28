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
    <h3 className='semi-title'>Select Completed Subject</h3>
    </div>
  );
};

export default Header;