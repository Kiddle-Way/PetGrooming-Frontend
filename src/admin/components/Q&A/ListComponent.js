import { useEffect, useState } from "react";
import { getList } from "../../../common/api/QnaApi";
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

  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data);
      setServerData(data);
    });
  }, [page, size, refresh]);

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      <div className="flex flex-wrap mx-auto justify-center p-6">
        {serverData.dtoList.map((qna) => (
          <div
            key={qna.f_num}
            className="w-full min-w-[400px] p-2 m-2 rounded shadow-md"
            onClick={() => moveToRead(qna.f_num)}
          >
            <div className="flex">
              <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                {qna.f_title}
              </div>
              <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                {qna.f_content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PageComponent
        serverData={serverData}
        movePage={moveToList}
      ></PageComponent>
      <div className="flex justify-end p-4">
        <Link
          to={"/qna/add"}
          type="button"
          className="inline-block rounded p-2 m-2 text-center w-32 text-white bg-blue-500"
        >
          글쓰기
        </Link>
      </div>
    </div>
  );
};

export default ListComponent;
