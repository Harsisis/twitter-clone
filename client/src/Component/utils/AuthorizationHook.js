import { useCookies } from 'react-cookie';

const KEY = 'TWITTER_TOKEN';

function useAuth() {
  const [cookies, setCookies, removeCookies] = useCookies([KEY]);

  function setCookie(value) {
    setCookies(KEY, value);
  }

  function removeCookie() {
    removeCookies(KEY);
  }

  return [cookies[KEY], setCookie, removeCookie];
}

export default useAuth;
