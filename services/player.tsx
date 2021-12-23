import {callAPI} from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getFeaturedGame = async () => {
  const url = `${ROOT_API}/player/landingpage`;

  return callAPI({
    url,
    method: 'GET',
  });
};

export const getDetailVoucher = async (id: any) => {
  const url = `${ROOT_API}/player/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
  });
};

export const getCategory = async () => {
  const url = `${ROOT_API}/player/category`;

  return callAPI({
    url,
    method: 'GET',
  });
};

export const setCheckout = async (data: any) => {
  const url = `${ROOT_API}/player/checkout`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
};
