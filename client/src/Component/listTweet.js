import PropTypes from 'prop-types';

import CreateTweet from './CreateTweet';
import Tweet from './tweet';
import SpinningLoad from './utils/spinningLoad';
import useAuth from './utils/AuthorizationHook';

function ListTweet(props) {

  const auth = useAuth();

  return (
    <div>
      {auth[0] != null ? (
        <CreateTweet></CreateTweet>
      ) : (
        ''
      )}
      {props.loading ? (
        <SpinningLoad></SpinningLoad>
      ) : (
        props.tweets.map((item) => (
          <Tweet
            key={item.id}
            body={item.body}
            createdAt={item.createdAt}
            user={item.user}
            comments={item.comments}
          ></Tweet>
        ))
      )}
    </div>
  );
}

ListTweet.propTypes = {
  tweets: PropTypes.array,
  loading: PropTypes.bool,
};

export default ListTweet;
