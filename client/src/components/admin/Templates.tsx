import { tenant_id, token } from "@/models/selectors/userSelectors";
import { getTenantTemplates } from "@/queries/admin";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Templates = () => {
  const userToken = useSelector(token);
  const userTenantId = useSelector(tenant_id);
  const { data } = useQuery({
    queryKey: ["getTenantTemplates"],
    // TO BE CHANGED!!!!
    queryFn: () =>
      getTenantTemplates({ token: userToken, tenant_id: userTenantId }),
    enabled: !!userToken, // εκτελείται μόνο αν υπάρχει token
    retry: false,
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return <div>Templates</div>;
};

export default Templates;
