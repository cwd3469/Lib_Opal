import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRetreatDoc } from "./api/list";
import queryKey from "../../../shared/config/queryKey";
import { useAlert } from "../../../widget/confirm/model/useAlert";

/**
 * 수련회 생성 firebase api
   @prams — RetreatConvertReq
 */
const useCreateRetreatDoc = () => {
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRetreatDoc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.retreat });
      showAlert({
        type: "success",
        title: "수련회 개설 성공",
        content: "firebase",
      });
    },
    onError(error) {
      console.log(error);
      showAlert({
        type: "error",
        title: "수련회 개설 실패",
        content: "firebase",
      });
    },
  });
};

export default useCreateRetreatDoc;
