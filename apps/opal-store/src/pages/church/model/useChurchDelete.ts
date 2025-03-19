import { useMutation } from "@tanstack/react-query";
import { deleteChurch } from "./api/firebase";

const useChurchDelete = () => {
  return useMutation({
    mutationFn: deleteChurch,
  });
};

export default useChurchDelete;
