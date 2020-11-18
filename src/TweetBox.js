import React, {useState} from 'react'
import './TweetBox.css'
import { Avatar,Button} from '@material-ui/core'
import db from './firebase'
import { useStateValue } from './StateProvider';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState(' ');
    const [tweetImage, setTweetImage] = useState("");
    const [{user}] = useStateValue();

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'New User',
            username: 'newperson',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cms.qz.com/wp-content/uploads/2018/10/Hatman_Artboard-2.jpg?quality=75&strip=all&w=900&h=900&crop=1",
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cms.qz.com/wp-content/uploads/2018/10/Hatman_Artboard-2.jpg?quality=75&strip=all&w=900&h=900&crop=1"></Avatar>   
                    <input
                    onChange={e => setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    type="text" 
                    placeholder="What's happening?"/> 
                </div>

                <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__inputImage"
                type="text" 
                placeholder="Optional: enter image URL"
                />


                <Button onClick={sendTweet} type="submit" className="tweetBtn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
