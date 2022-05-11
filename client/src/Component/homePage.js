
import React from 'react';
import ListTweet from './listTweet';
import PropTypes from 'prop-types';

import './../style/twitter.css';
import mainLogo from '../logo.png'

function homePage(props) {

  return (
    <div>
        <header>
            <img className="logo" src={mainLogo} alt="Twitter"></img>
        </header>
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
