import moment from "moment"
import PropTypes from 'prop-types';
import TweetComment from "./tweetComment"

import { Link } from 'react-router-dom';

function tweet(props){
    return (
        <div className="tweet">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to={`/user/${props.user.name}`}>
                                <img className="userIcon tweetUserIcon" src={props.user.profilePicture} alt="Logo" />
                                {props.user.username}
                            </Link>
                        </td>
                        <td></td>
                        <td className="date tweetDate">{moment(props.createdAt).fromNow()}</td>
                        
                    </tr>
                    <tr>
                        <td colSpan="3">{props.body}</td>
                    </tr>
                    {props.comments.map((item) => (
                        <TweetComment key={item.id} body={item.body} createdAt={item.createdAt} user={item.user}></TweetComment>
                    ))}
                </tbody>
                
            </table>
        </div>
    );
}

tweet.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        name: PropTypes.string,
        profilePicture: PropTypes.string
      }),
    createdAt: PropTypes.string,
    body: PropTypes.string,
    comments: PropTypes.array
  };

export default tweet;