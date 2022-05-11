import Tweet from './tweet'
import SpinningLoad from './utils/spinningLoad'
import PropTypes from 'prop-types';

function ListTweet(props) {
      return (
        <div>
        {props.loading ? <SpinningLoad></SpinningLoad> : props.tweets.map((item) => (
          <Tweet key={item.id} body={item.body} createdAt={item.createdAt} user={item.user} comments={item.comments}></Tweet>
        ))}
      </div>
      );
}

ListTweet.propTypes = {
    tweets: PropTypes.array,
    loading : PropTypes.bool
  };

export default ListTweet;