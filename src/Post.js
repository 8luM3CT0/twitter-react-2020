import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';



const Post = forwardRef(({
    displayName,
    avatar,
    username,
    verified,
    text,
    image}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}></Avatar>
            </div>
            <div className="post__body">
                 <div className="post__header">
                    <div className="header__text">
                        <h3>
                        {displayName} 
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}@{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDesc">
                        <p>{text}</p>
                    </div>
                 </div>
                 <img src={image} alt=""/>
                 <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                 </div>
            </div>
            {/**Link to login would be here. */}
            {/**The position is going to be stuck at the bottom, so it'll be sticky. in theory that's how its supposed to */}
            {/**Ok maybe not here */}
        </div>
        )
    })

export default Post
