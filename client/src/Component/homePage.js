
import React from 'react';
import ListTweet from './listTweet';
import PropTypes from 'prop-types';

import './../Style/twitter.css';

function homePage(props) {

  return (
    <div>
        <div className="container">
          <ListTweet tweets={props.tweets} loading={props.loading}></ListTweet>
        </div>
    </div>
  );
}

homePage.propTypes = {
  tweets: PropTypes.array,
  loading : PropTypes.bool
};

export default homePage;
