import axios, {AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';

interface Props extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export const callAPI = async (props: Props) => {
  const {url, method, data, token, serverToken} = props;

  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');

    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const res = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (res.status > 300) {
    const response = {
      error: true,
      message: res.data.message,
      data: null,
    };

    return response;
  }

  const {length} = Object.keys(res.data);
  const response = {
    error: false,
    message: 'Success',
    data: length > 1 ? res.data : res.data.data,
  };

  return response;
};
