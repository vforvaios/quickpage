import { getTenant } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import GenericError from "./GenericError";
import Loader from "./Loader";
import Template from "./Template";
import type { Tenant } from "@/models/types";

const Home = ({ tenant }: any) => {
  const {
    data: tenantData,
    isFetching,
    isError,
    error,
  } = useQuery<Tenant | undefined>({
    queryKey: ["get-tenant-info"],
    queryFn: () => getTenant(tenant),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return <GenericError error={error.toString()} />;
  }

  if (isFetching) {
    return <Loader variant="fullscreen" />;
  }

  return <Template tenant={tenantData} />;
};

export default Home;
