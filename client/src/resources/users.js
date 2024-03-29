import { createResource, defaultHeaders } from 'redux-rest-resource/lib';
import { API_URL } from '../constants';
import {
  clearAuthData,
  getAuthData,
  saveAuthData,
} from '../helpers/authStorage';

const setAuthHeader = (accessToken) => {
  Object.assign(defaultHeaders, {
    Authorization: accessToken,
  });
};

const withSaveTokens = (res) => {
  setAuthHeader(res.body.accessToken);
  saveAuthData(res.body);

  return {
    res,
    body: res.body,
  };
};

export const { types, actions, rootReducer } = createResource({
  name: 'user',
  url: `${API_URL}/users/:id`,

  actions: {
    login: {
      method: 'POST',
      url: `${API_URL}/login`,
      transformResponse: withSaveTokens,
    },

    refresh: {
      method: 'POST',
      url: `${API_URL}/auth-token-refresh`,
      transformResponse: withSaveTokens,
    },

    create: {
      method: 'POST',
      transformResponse: withSaveTokens,
    },

    forgotPassword: {
      method: 'POST',
      url: `${API_URL}/forgot-password`,
    },

    resetPassword: {
      method: 'POST',
      url: `${API_URL}/reset-password`,
    },

    logout: {
      isPure: true,
      reduce: (state) => {
        clearAuthData();
        setAuthHeader(null);

        return {
          ...state,
          item: null,
        };
      },
    },
  },
});

setAuthHeader(getAuthData().accessToken);
