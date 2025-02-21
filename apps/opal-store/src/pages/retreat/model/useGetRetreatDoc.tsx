import { useQuery } from "@tanstack/react-query";
import { getRetreatDoc } from "./api/list";
import QueryKey from "../../../shared/config/QueryKey";

/**수련회 리스트 조회 firebase api
 *  @return — RetreatReq[]
 */
const useGetRetreatDoc = () => {
  return useQuery({ queryKey: QueryKey.RETREAT, queryFn: getRetreatDoc });
};

export default useGetRetreatDoc;
