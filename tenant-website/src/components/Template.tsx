import type { Tenant } from "@/models/types";

interface ITemplateProps {
  tenant: Tenant | undefined;
}
const Template = ({ tenant }: ITemplateProps) => {
  console.log(tenant);
  return <div>Template</div>;
};

export default Template;
