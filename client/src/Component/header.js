import { useNavigate, Link } from 'react-router-dom';

import mainLogo from '../logo.png';

import useAuth from './utils/AuthorizationHook';

function Header() {
  const navigate = useNavigate();

  const auth = useAuth();

  const handleLogout = () => {
    auth[2]();
    navigate('/');
  };

  return (
    <header>
      <div>
        <Link to="/">
          <img className="logo" src={mainLogo} alt="Twitter"></img>
        </Link>
      </div>

      {auth[0] == null ? (
        <div className="login">
          <Link to="/login">
            <div className="button rounded blue">login</div>
          </Link>
        </div>
      ) : (
        <div className="login">
          <button className="button rounded blue" onClick={handleLogout}>
            logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
