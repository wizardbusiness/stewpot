import React, {useState, useEffect} from 'react';
import Tab from '../components/Tab.tsx';
import './Sidebar.css';

type tabStateType = string[];

const iTabState: tabStateType = ['Pantry', 'Favorites', 'Find Recipes' ];

export default function Sidebar() {
  // navigate to different tabs
  const [ tabState, setTabState ] = useState(iTabState);

  const tabs = tabState.map((tab) => <Tab tabName={tab} href={tab.toLowerCase().replace(' ', '%')}/>)

  return (
    <div className='sidebar'>
      {tabs}
    </div>
  )
}