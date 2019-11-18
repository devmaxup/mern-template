const AUTH_STORAGE_KEY = 'authData';

export const getAuthData = () =>
  JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || '{}');

export const saveAuthData = ({ userId, accessToken, refreshToken }) =>
  localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify({ userId, accessToken, refreshToken })
  );

export const clearAuthData = () => localStorage.removeItem(AUTH_STORAGE_KEY);

export const hasAuthData = () => !!getAuthData().userId;
