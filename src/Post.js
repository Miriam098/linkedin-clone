import React from 'react'
import './Post.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post__header">
                <AccountCircleIcon src={photoUrl}>{name[0]}</AccountCircleIcon>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                {message}
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='grey' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='grey' />
                <InputOption Icon={ShareIcon} title='Share' color='grey' />
                <InputOption Icon={SendIcon} title='Send' color='grey' />

            </div>
        </div>
    )
}

export default Post 
