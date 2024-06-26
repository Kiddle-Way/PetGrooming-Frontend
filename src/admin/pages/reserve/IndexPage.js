import { useNavigate } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {
  const navigate = useNavigate();
  const handleClickAllList = useCallback(() => {
    navigate({ pathname: "/reserve/list" });
  });
  const handleClickPastList = useCallback(() => {
    navigate({ pathname: "past" });
  });

  return (
    <BasicLayout>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 space-y-2 font-medium">
        <div
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group cursor-pointer"
          onClick={handleClickAllList}
        >
          예약 내역
        </div>
        <div
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group cursor-pointer"
          onClick={handleClickPastList}
        >
          지난 예약
        </div>

      </div>
    </BasicLayout>
  );
};
export default IndexPage;
