import { useMutation } from "@tanstack/react-query";
import { setChurchUserId } from "./api/firebase";

const useChurchSetUserId = () => {
  return useMutation({
    mutationFn: setChurchUserId,
  });
};

export default useChurchSetUserId;
