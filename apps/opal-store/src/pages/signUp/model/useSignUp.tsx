import { useMutation } from "@tanstack/react-query";
import { signUp } from "./api/firebase";

const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

export default useSignUp;
