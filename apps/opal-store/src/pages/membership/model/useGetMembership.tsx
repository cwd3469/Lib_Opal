import { useQuery } from "@tanstack/react-query";

import QueryKey from "@/shared/config/QueryKey";

import { getMembershipDoc } from "./api";

const useGetMembership = () => {
  return useQuery({ queryKey: QueryKey.MEMBERSHIP, queryFn: getMembershipDoc });
};

export default useGetMembership;
