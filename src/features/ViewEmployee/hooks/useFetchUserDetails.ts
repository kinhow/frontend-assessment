import { fetchUserDetails } from "@/apis";
import { UserDetailsTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchUserDetails = () => {
  const { data, isPending } = useQuery<UserDetailsTypes>({
    queryKey: ['user'],
    queryFn: fetchUserDetails
  })
  const userLists = data?.data;

  return { userLists, isPending }
}
