import { getTenant } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import GenericError from "./GenericError";
import Loader from "./Loader";

const Home = ({ tenant }: any) => {
  const {
    data: tenantData,
    // isSuccess,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["get-tenant-info"],
    queryFn: () => getTenant(tenant),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return <GenericError />;
  }

  if (isFetching) {
    return <Loader variant="fullscreen" />;
  }

  console.log(tenantData);
  return <div>Welcome</div>;
};

export default Home;
