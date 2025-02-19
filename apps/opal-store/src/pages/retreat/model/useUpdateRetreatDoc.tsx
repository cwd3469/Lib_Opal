import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRetreatDoc } from "./api/list";
import queryKey from "../../../shared/config/queryKey";

/**
 * 수련회 수정 firebase api
 @prams — RetreatConvertReq 
*/
const useUpdateRetreatDoc = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateRetreatDoc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.retreat });
    },
  });
};

export default useUpdateRetreatDoc;
