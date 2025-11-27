import { getTenant } from "@/queries";
import { useQuery } from "@tanstack/react-query";

const Home = ({ tenant }: any) => {
  const {
    data: tenantData,
    // isSuccess,
    // isError,
    // error,
  } = useQuery({
    queryKey: ["get-tenant-info"],
    queryFn: () => getTenant(tenant),
    retry: false,
    refetchOnWindowFocus: false,
  });

  console.log(tenantData);
  return <div>Welcome</div>;
};

export default Home;
