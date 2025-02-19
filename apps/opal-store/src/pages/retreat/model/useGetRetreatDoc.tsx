import { useQuery } from "@tanstack/react-query";
import { getRetreatDoc } from "./api/list";
import queryKey from "../../../shared/config/queryKey";

/**수련회 리스트 조회 firebase api
 *  @return — RetreatReq[]
 */
const useGetRetreatDoc = () => {
  return useQuery({ queryKey: queryKey.retreat, queryFn: getRetreatDoc });
};

export default useGetRetreatDoc;
