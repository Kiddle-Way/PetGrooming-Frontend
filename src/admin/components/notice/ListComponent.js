import { useEffect, useState } from "react";
import { getList, search } from "../../../common/api/noticeApi";
import useCustomMove from "../../../common/hooks/useCustomMove";
import PageComponent from "../../../common/components/PageComponent";
import { Link } from "react-router-dom";

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
    if (!searchTerm.trim()) {
      alert("검색어를 입력해주세요.");
    }

    const pageParam = { page: 1, size: 10 };
    try {
      const result = await search(
        searchType === "제목" ? "title" : "content",
        searchTerm,
        pageParam
      );
      setServerData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data);
      setServerData(data);
    });
  }, [page, size, refresh, searchTerm]);

  return (
    <div className=" mt-10 mr-2 ml-2">
      <div className="flex justify-start">
        <div className="flex items-start">
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
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs"
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded-md"
            onClick={handleSearchButtonClick}
          >
            검색
          </button>
        </div>
      </div>
      <div className="my-5 overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr className="bg-gradient-to-r from-green-200 via-green-100 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <th>게시물 번호</th>
              <th>글유형</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {serverData.dtoList.map((notice) => (
              <tr
                key={notice.n_num}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => moveToRead(notice.n_num)}
              >
                <td>{notice.n_num}</td>
                <td>{notice.n_head}</td>
                <td>{notice.n_title}</td>
                <td>{notice.n_reg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <PageComponent
          serverData={serverData}
          movePage={moveToList}
        ></PageComponent>
      </div>
      <div className="flex justify-end p-4">
        <Link
          to={"/notice/add"}
          type="button"
          className="inline-block rounded p-2 m-2 text-center w-32 text-white bg-blue-500"
        >
          글쓰기
        </Link>
      </div>
    </div>
  );
};

const categories = ["제목", "내용"];

export default ListComponent;
