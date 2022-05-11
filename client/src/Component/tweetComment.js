import moment from "moment";

function tweetComment(props) {
    return (
        <tr>
            <td colSpan="3">
                <table className="commentTable">
                    <tbody>
                        <tr>
                            <td>
                            <p className="commentFontSize">
                                <img className="userIcon commentUserIcon" src={props.user.profilePicture} alt="Logo" />
                                {props.user.username}
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