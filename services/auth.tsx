import {callAPI} from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const setSignUp = async (data: any) => {
  const url = `${ROOT_API}/auth/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};

export const setSignIn = async (data: any) => {
  const url = `${ROOT_API}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
