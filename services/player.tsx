import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getFeaturedGame = async () => {
  const URL = 'player/landingpage';

  const res = await axios.get(`${ROOT_API}/${URL}`);
  const axiosRes = res.data;

  return axiosRes.data;
};

export const getDetailVoucher = async (id: any) => {
  const URL = `player/${id}/detail`;

  const res = await axios.get(`${ROOT_API}/${URL}`);
  const axiosRes = res.data;

  return axiosRes.data;
};
