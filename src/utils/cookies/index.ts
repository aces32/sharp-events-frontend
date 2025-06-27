/* import/no-extraneous-dependencies */
import Cookies from 'js-cookie';

const TOKEN_NAME = 'userToken';

export function checkAuthToken() {
  const token = Cookies.get(TOKEN_NAME);

  return token;
}

export function getAuthToken() {
  const token = Cookies.get(TOKEN_NAME);

  return token;
}

export function removeAuthToken() {
  Cookies.remove(TOKEN_NAME);
}

export function setAuthToken(tokenValue: string, time: string) {
  const expire = new Date(time);
  Cookies.set(TOKEN_NAME, tokenValue, { expires: expire });
}

export function getCookie(name: string) {
  const token = Cookies.get(name);

  return token;
}

export function removeCookie(name: string) {
  Cookies.remove(name);
}

export function setCookie(name: string, value: string | object | any) {
  Cookies.set(name, value);
}

export function setCookieWithExpireTime(
  name: string,
  value: string | object | any,
  day: number = 2,
) {
  Cookies.set(name, value, { expires: day });
}
