import React, { useState } from 'react';
import "./NavBar.css";
import { RiMenu3Line } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';



const NavBar = () => {
  const [open, setOpen] = useState(false);

    const openNav = () => {
      setOpen((prev) => !prev);
    }

    const linkActive = () => {

    }

  return (
    <div className='navbar'>
        <div className={open ? 'comot' : 'navLeft'}>
            <h1>Web<span>X</span></h1>
        </div>
       
       <div className={open ? 'nav_click' : 'navigation'}>
        <div className='close' onClick={openNav}><GrClose /></div>
         <div className='menu'>
              <div className="navCenter">
                  <div ><a  href="#">Home</a></div>
                  <div><a href="#">About</a></div>
                  <div><a href="#">Works</a></div>
                  <div><a href="#">Contact</a></div>
              </div>
              <div className="navRight">
                  Let's talk
              </div>
         </div>
         <div className='navLeft mobile'>
            <h1>Web<span>X</span></h1>
          </div>
       </div>
          <div className={open ? 'comot' : 'nav_menu' } onClick={openNav}><RiMenu3Line /></div>
    </div>
  )
}

export default NavBar;