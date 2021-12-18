import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_LINK,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});
