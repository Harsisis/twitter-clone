import PropTypes from 'prop-types';
import '../Style/profil.css'

import Tweet from './tweet'

function ProfilCard(props) {
    return (
        <div>
            <div className="container">
                <div className="profile">
                    <div className="profilePicture">
                        <img src={props.profilePicture} alt="profilePicture"></img>
                    </div>
                    <div>
                        <div className="profilName">{props.name}</div>
                        <div>{props.username}</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    {props.tweets?.map((item) => (
                        <Tweet key={item.id} body={item.body} createdAt={item.createdAt} user={item.user} comments={item.comments}></Tweet>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

ProfilCard.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string,
    profilePicture: PropTypes.string,
    tweets: PropTypes.array
  };

export default ProfilCard;