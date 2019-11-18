import { defaultGlobals } from 'redux-rest-resource/lib';
import { fetch } from 'whatwg-fetch';
import { actions } from './users';
import { getAuthData, clearAuthData } from '../helpers/authStorage';

const NOOP = () => {};
const PATH_THROUGH_REQUEST_REGEXP = /\/(auth-token-refresh|login|forgot-password|reset-password|users\/create)/i;

let refreshTokenPromise;
Object.assign(defaultGlobals, {
  fetch: (...args) =>
    fetch.apply(this, args).then((response) => {
      if (
        response.status !== 401 ||
        PATH_THROUGH_REQUEST_REGEXP.test(response.url)
      ) {
        return response;
      }

      const { refreshToken, userId } = getAuthData();
      if (!refreshToken) {
        return Promise.reject(response);
      }

      if (refreshTokenPromise) {
        return refreshTokenPromise;
      }

      refreshTokenPromise = actions
        .refreshUser({ refreshToken, userId })(NOOP)
        .then((res) => {
          refreshTokenPromise = null;
          return res;
        })
        .catch((errorResponse) => {
          clearAuthData();

          document.location.href = '/login';
          return Promise.reject(errorResponse);
        })
        .then(() => fetch.apply(this, args));

      return refreshTokenPromise;
    }),
});
