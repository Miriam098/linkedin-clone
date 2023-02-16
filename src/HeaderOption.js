import React from 'react';
import './HeaderOption.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderOption({ avatar, Icon, title, onClick }) {
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <AccountCircleIcon className="headerOption__icon" />
            )}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}

export default HeaderOption;
