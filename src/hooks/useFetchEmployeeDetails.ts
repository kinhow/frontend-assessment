import { fetchUserDetails } from "@/apis"
import { useQuery } from "@tanstack/react-query"

const useFetchEmployeeDetails = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUserDetails
  })
  const userLists = data?.data

  return { userLists }
}

export default useFetchEmployeeDetails;
