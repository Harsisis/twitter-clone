import mainLogo from '../logo.png'
import { useNavigate, Link } from 'react-router-dom';

function Header(){

  const navigate = useNavigate();

    const handleLogout = () => {
      sessionStorage.clear();
      navigate('/');
    }

    return (
        <header>
          <div>
            <Link to='/'>
              <img className="logo" src={mainLogo} alt="Twitter"></img>
            </Link>
          </div>
          
          {sessionStorage.getItem('token') == null ? 
            <div className="login">
              <Link to='/login'>
                <div className="button rounded blue">login</div>
              </Link>
            </div> :
            <div className="login">
              <button className="button rounded blue" onClick={handleLogout}>logout</button>
            </div>
          }
          
        </header>
    );
}

export default Header;