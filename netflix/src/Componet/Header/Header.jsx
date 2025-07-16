import React from 'react'  
 import './Header.css'; 
 import logo from '../../images/logos.jpg';
 import SearchIcon from '@mui/icons-material/Search';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div>
        <div className='header_outer_container'>
            <div className='header_left'>
               
                <ul className = 'list'>
                                <li className='logo_container'>
                                 <img src={logo} alt="Netflix Logo" className='logo' />
                                </li>
                    <li>NetFlix</li>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li> 
                    <li>browse by languages</li> 
                </ul>
            </div>

            <div className='header_right'>
                <ul>
                  <li><SearchIcon /></li>
                   <li><NotificationsIcon /></li>
                   <li><AccountBoxIcon/></li>
                   <li><ArrowDropDownIcon /></li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Header