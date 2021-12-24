import {callAPI} from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/player/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getHistory = async (valParams: any) => {
  let params = '';

  if (valParams === 'all') {
    params = '';
  } else {
    params = `?status=${valParams}`;
  }

  const url = `${ROOT_API}/player/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getHistoryDetail = async (id: any, token: any) => {
  const url = `${ROOT_API}/player/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
};

export const updateProfile = async (data: any) => {
  const url = `${ROOT_API}/player/profile`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};
