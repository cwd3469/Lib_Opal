import QueryKey from "@/shared/config/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { getChurchDoc } from "./api/firebase";

const useGetChurchDoc = () => {
  return useQuery({ queryKey: QueryKey.CHURCH, queryFn: getChurchDoc });
};

export default useGetChurchDoc;
