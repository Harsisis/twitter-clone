import moment from "moment";
import { Link } from 'react-router-dom';

function tweetComment(props) {
    return (
        <tr>
            <td colSpan="3">
                <table className="commentTable">
                    <tbody>
                        <tr>
                            <td>
                            <p className="commentFontSize">
                                <Link to={`user/${props.user.name}`}>
                                    <img className="userIcon commentUserIcon" src={props.user.profilePicture} alt="Logo" />
                                    {props.user.username}
                                </Link>
                            </p>
                            </td>
                            <td className="date commentDate">{moment(props.createdAt, "YYYYMMDD").fromNow()}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="commentFontSize">{props.body}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}

export default tweetComment;