import { useQuery } from "@tanstack/react-query";
import { getRetreatDetailDoc } from "./api/retreatDetail";
import QueryKey from "@/shared/config/QueryKey";

const useGetRetreatDetailDoc = (retreatId?: string) => {
  return useQuery({
    queryKey: QueryKey.RETREAT_DETAIL(retreatId),
    queryFn: () => getRetreatDetailDoc(retreatId),
    enabled: !!retreatId,
  });
};

export default useGetRetreatDetailDoc;
