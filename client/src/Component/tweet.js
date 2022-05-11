import moment from "moment"
import PropTypes from 'prop-types';
import TweetComment from "./tweetComment"

function tweet(props){
    return (
        <div className="tweet">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img className="userIcon tweetUserIcon" src={props.user.profilePicture} alt="Logo" />
                            {props.user.username}
                        </td>
                        <td></td>
                        <td className="date tweetDate">{moment(props.createdAt, "YYYYMMDD").fromNow()}</td>
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
      }).required,
    createdAt: PropTypes.string,
    body: PropTypes.string,
    comments: PropTypes.array
  };

export default tweet;