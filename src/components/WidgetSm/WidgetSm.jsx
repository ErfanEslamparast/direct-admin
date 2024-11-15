import React from 'react';
import './WidgetSm.css'
import { newUsers } from '../../datas';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const WidgetSm = () => {
    return (
        <div className='WidgetSm-container'>
            <h3 className="title">New Joined Members</h3>  
                <ul>
                    {newUsers.map((user) => {
                      return  (
                    <li className='widget-item' key={user.id}>
                        <img className='user-image' src={user.imgSrc} />
                        <div className="user-info">
                            <p className="username">{user.name}</p>
                            <span className="user-skill">{user.skill}</span>
                        </div>
                        <button alt={user.name}><RemoveRedEyeIcon/></button>
                    </li>
                        )
                    })}
                </ul>
        </div>
    );
}

export default WidgetSm;
