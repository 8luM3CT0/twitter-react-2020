import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className="widgets">
                <div className="widgets__input">
                        <SearchIcon className="widgets__searchIcon" />
                        <input placeholder="Search Twitter" type="text"/>
                        </div>

                        <div className="widgets__container">
                            <h2>What's happening</h2>

                            <TwitterTweetEmbed tweetId={"1314536088166232067"} />
                            
                            <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="reaperiff697"
                            options={{height: 400}} 
                            />

                            <TwitterShareButton url={"https://facebook.com/BlumeCTO"} 
                            options={{text: "#webdevelopment is awesome",via: "blumecto"}}
                            />

                        </div>
        </div>
    )
}

export default Widgets
