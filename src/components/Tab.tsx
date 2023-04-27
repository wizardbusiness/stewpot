import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Tab.css';

type tabPropTypes = { tabName: string, href: string };

export default function Tab({ tabName, href } : tabPropTypes ) {
  // tab in sidebar
  
  return (
    <div className='tab'>
      <Link to={`/${href}`}>{tabName}</Link>
    </div>
  )
}