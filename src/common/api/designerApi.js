import axios from "axios";

//서버   주소
export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/designer`;

export const getOne = async (dno) => {
  const res = await axios.get(`${prefix}/${dno}`);

  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });

  return res.data;
};
