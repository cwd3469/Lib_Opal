import { useMutation } from "@tanstack/react-query";
import { createChurch } from "./api/firebase";

const useChurchCreate = () => {
  return useMutation({
    mutationFn: createChurch,
  });
};

export default useChurchCreate;
