import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRetreatDoc } from "./api/list";
import QueryKey from "@/shared/config/QueryKey";

/**
 * 수련회 삭제 firebase api
   @prams id
 */
const useDeleteRetreatDoc = (retreatId: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRetreatDoc,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QueryKey.RETREAT_DETAIL(retreatId),
      });
      queryClient.invalidateQueries({
        queryKey: QueryKey.RETREAT,
      });
    },
  });
};

export default useDeleteRetreatDoc;
