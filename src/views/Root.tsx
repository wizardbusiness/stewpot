import { Outlet } from 'react-router-dom';
import Sidebar from '../views/Sidebar.tsx';
import './Root.css';


export default function Root() {
  return(
    <>
      <div id='root-display'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}