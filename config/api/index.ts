import axios, {AxiosRequestConfig} from 'axios';

export const callAPI = async ({url, method, data}: AxiosRequestConfig) => {
  const res = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  if (res.status > 300) {
    const response = {
      error: true,
      message: res.data.message,
      data: null,
    };

    return response;
  }

  const response = {
    error: false,
    message: 'Success',
    data: res.data.data,
  };

  return response;
};
