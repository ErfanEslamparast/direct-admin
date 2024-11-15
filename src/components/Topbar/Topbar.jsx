import React from 'react';
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
    return (
        <div className='topbar-container'>
            <div className="logo"><img src="./images/images_75.jpg" alt="logo" /></div>
            <div className="icons">
                <div className="icon-box">
                <NotificationsIcon/>
                <span className='badge'>2</span>
                </div>
                <div className="icon-box">
                <LanguageIcon/>
                <span className='badge'>2</span>
                </div>
                <div className="icon-box">
                <SettingsIcon/>
                </div>
                <img src="images/profile.jpg" className='profile-photo'/>
            </div>
        </div>
    );
}

export default Topbar;
