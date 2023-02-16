import React from 'react'
import './Sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import topImage from "./resources/james-harrison.jpg";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={topImage} alt="unsplash photon" />
                <AccountCircleIcon src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</AccountCircleIcon>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>

                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className='sidebar__statNumber'>1,243</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming')}
                {recentItem('software-engineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
