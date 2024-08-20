import { useEffect } from "react";
import { Open_Sans } from "next/font/google";
import { useEmployeeStore } from "@/store";
import { useFetchEmployeeDetails } from "@/hooks";
import { AddEmployee, ViewEmployee } from "@/features";

const openSans = Open_Sans({ subsets: ["latin"] });

const HomePage = () => {
  const { userLists } = useFetchEmployeeDetails();
  const initialize = useEmployeeStore((state) => state.initialize);

  useEffect(() => {
    if (userLists) {
      initialize(userLists);
    }
  }, [userLists, initialize]);
  
  return (
    <main className={`p-4 min-h-screen md:max-w-screen-xl mx-auto ${openSans.className}`}>
      <div className="flex flex-col gap-4">
        <AddEmployee />
        <ViewEmployee />
      </div>
    </main>
  )
}

export default HomePage;
