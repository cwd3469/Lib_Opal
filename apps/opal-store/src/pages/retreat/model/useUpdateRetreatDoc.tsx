import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRetreatDoc } from "./api/list";
import QueryKey from "../../../shared/config/QueryKey";

/**
 * 수련회 수정 firebase api
 @prams — RetreatConvertReq 
*/
const useUpdateRetreatDoc = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateRetreatDoc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKey.RETREAT });
    },
  });
};

export default useUpdateRetreatDoc;
