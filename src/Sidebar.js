import React from 'react'
import './Sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import topImage from "./resources/james-harrison.jpg";

function Sidebar() {
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
                <AccountCircleIcon className='sidebar__avatar' />
                <h2>Miriam Olivier</h2>
                <h4>miriamolivier@gmail.com</h4>
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
