import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1420312217115836416'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="doollawat"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/doollawat'}
          options={{ text: '#reactjs is awesome', via: 'uxxi' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
