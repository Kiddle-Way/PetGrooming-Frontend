import { useEffect, useState } from "react";
import { getList, search } from "../../../common/api/inquiryApi"; // getList 및 search 함수 import
import useCustomMove from "../../../common/hooks/useCustomMove";
import FetchingModal from "../../../common/components/FetchingModal";
import PageComponent from "../../../common/components/PageComponent";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  const { page, size, refresh, moveToList, moveToRead } = useCustomMove();
  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("제목");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
    setSearchType(category);
  };

  const handleSearchButtonClick = async () => {
    const pageParam = { page: 1, size: 10 };
    try {
      setFetching(true); // 검색 시작 시 로딩 표시
      const result = await search(
        searchType === "제목" ? "title" : "content",
        searchTerm,
        pageParam
      );
      setServerData(result); // 검색 결과로 서버 데이터 업데이트
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false); // 검색 완료 시 로딩 표시 제거
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      // 검색어가 비어있을 때 전체 목록을 불러옴
      getList({ page, size }).then((data) => {
        setServerData(data);
        setFetching(false);
      });
    }
  }, [page, size, refresh, searchTerm]); // 페이지, 사이즈, 리프레시, 검색어가 변경되었을 때만 useEffect 실행

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      {fetching ? <FetchingModal /> : null}
      <div className="flex flex-wrap mx-auto p-6">
        {serverData.dtoList.map((inquiry) => (
          <div
            key={inquiry.i_num}
            className="w-1/2 p-1 rounded shadow-md border-2"
            onClick={() => moveToRead(inquiry.i_num)}
          >
            <div className="flex flex-col h-full">
              <div className="font-extrabold text-2xl p-2 w-full">
                {inquiry.i_num}
              </div>
              <div className="text-1xl m-1 p-2 w-full flex flex-col">
                <div className="bottom-0 font-extrabold bg-yellow-300">
                  <div className="text-center p-1">
                    리뷰제목: {inquiry.i_title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PageComponent
          serverData={serverData}
          movePage={moveToList}
        ></PageComponent>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center">
          <select
            className="px-4 py-2 mr-2 border rounded"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            className="px-4 py-2 mr-2 border rounded"
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSearchButtonClick}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

const categories = ["제목", "내용"];

export default ListComponent;
