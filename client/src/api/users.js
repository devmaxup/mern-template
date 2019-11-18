import axios from 'axios';
import { API_URLS } from '../constants/api';

export const fetchUsers = (page = 1) =>
  axios.get(API_URLS.API_URLS, {
    params: {
      page,
    },
  });
