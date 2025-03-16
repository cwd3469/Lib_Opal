import { useMutation } from "@tanstack/react-query";
import { createChurch } from "./api/firebase";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";
import { CHURCH_CREATE_FAIL_MSG } from "../config/context";

const useChurchCreate = () => {
  const { showAlert } = useAlert();
  return useMutation({
    mutationFn: createChurch,
    onError(error) {
      showAlert({
        type: "error",
        title: CHURCH_CREATE_FAIL_MSG.TITLE,
        content: error.message,
      });
    },
  });
};

export default useChurchCreate;
