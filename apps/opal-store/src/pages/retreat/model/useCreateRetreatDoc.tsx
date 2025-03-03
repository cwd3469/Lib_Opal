import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRetreatDoc } from "./api/list";
import QueryKey from "@/shared/config/QueryKey";

/**
 * 수련회 생성 firebase api
   @prams — RetreatConvertReq
 */
const useCreateRetreatDoc = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRetreatDoc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKey.RETREAT });
    },
  });
};

export default useCreateRetreatDoc;
