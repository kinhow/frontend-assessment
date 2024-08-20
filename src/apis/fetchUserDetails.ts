import axios from "axios";
import { transformObject } from "@/utils";
import { UserDetailsTypes } from "@/types";

export const fetchUserDetails = async (): Promise<UserDetailsTypes> => {
  const response = await axios.get("https://reqres.in/api/users");
  return transformObject(response.data);
}
