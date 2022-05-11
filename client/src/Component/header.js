import mainLogo from '../logo.png'
import { Link } from 'react-router-dom';

function header(){
    return (
        <header>
          <Link to='/'>
            <img className="logo" src={mainLogo} alt="Twitter"></img>
          </Link>
        </header>
    );
}

export default header;