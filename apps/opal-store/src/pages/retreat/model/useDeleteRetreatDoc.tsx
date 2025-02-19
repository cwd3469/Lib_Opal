import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRetreatDoc } from "./api/list";
import queryKey from "../../../shared/config/queryKey";

/**
 * 수련회 삭제 firebase api
   @prams id
 */
const useDeleteRetreatDoc = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRetreatDoc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.retreat });
    },
  });
};

export default useDeleteRetreatDoc;
