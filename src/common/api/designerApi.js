import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./productApi";

// 서버 주소

const host = `${API_SERVER_HOST}/api/designer`;

//특정번호의 조회
export const getOne = async (dno) => {
  const res = await jwtAxios.get(`${host}/${dno}`);

  return res.data;
};

export const getList = async ({ page, size }) => {
  try {
    const res = await jwtAxios.get(`${host}/list`, {
      params: { page: page, size: size },
    });
    return res.data;
  } catch (error) {
    console.error("데이터를 불러오는 데 실패했습니다:", error);
    throw error; // 에러를 잡아서 상위 컴포넌트에서 처리할 수 있도록 throw 해줍니다.
  }
};

// 서버 호출 결과
export const postAdd = async (designer) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  // 경로    뒤   '/' 주의
  const res = await jwtAxios.post(`${host}/`, designer, header);

  return res.data;
};

//삭제 호출기능
export const deleteOne = async (dno) => {
  const res = await jwtAxios.delete(`${host}/${dno}`);
  return res.data;
};

//수정 기능
export const putOne = async (dno, designer) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await jwtAxios.put(`${host}/${dno}`, designer, header);
  return res.data;
};
//검색
export const search = async (keyword, pageParam) => {
  try {
    const { page, size } = pageParam;
    const url = `${host}/list/searchTerm/${keyword}`;
    const res = await jwtAxios.get(url, {
      params: { keyword: keyword, page: page, size: size },
    });
    return res.data; // PageResponseDTO<DTO> 반환
  } catch (error) {
    console.error(error);
    throw error; // 에러 처리
  }
};

//성별
export const searchGender = async (searchGender, pageParam) => {
  try {
    const { page, size } = pageParam || {};
    const url = `${host}/list/searchGender/${searchGender}`;

    const res = await jwtAxios.get(url, {
      params: { searchGender: searchGender, page: page, size: size },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//근무상태
export const searchState = async (searchState, pageParam) => {
  try {
    const { page, size } = pageParam || {};
    const url = `${host}/list/searchState/${searchState}`;

    const res = await jwtAxios.get(url, {
      params: { searchState: searchState, page: page, size: size },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 복직 API 호출 함수
export const rehireDesigner = async (dno) => {
  try {
    const response = await jwtAxios.put(`${host}/modify/${dno}/rehire`); // 복직 API 엔드포인트에 따라 경로가 다를 수 있습니다.
    return response.data;
  } catch (error) {
    console.error("Error rehiring designer:", error);
    throw error; // 예외를 상위 컴포넌트로 전파하거나 처리할 수 있습니다.
  }
};

// 퇴사 API 호출 함수
export const fireDesigner = async (dno) => {
  try {
    const response = await jwtAxios.put(`${host}/modify/${dno}/fire`); // 퇴사 API 엔드포인트에 따라 경로가 다를 수 있습니다.
    return response.data;
  } catch (error) {
    console.error("Error fire designer:", error);
    throw error; // 예외를 상위 컴포넌트로 전파하거나 처리할 수 있습니다.
  }
};

export const updateDesignerState = async (dno, state) => {
  try {
    const response = await jwtAxios.put(`${host}/${dno}/${state}`);
    return response.data;
  } catch (error) {
    console.error("Error updating designer state:", error);
    throw error;
  }
};
