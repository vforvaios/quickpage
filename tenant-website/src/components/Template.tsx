import type { Tenant } from "@/models/types";
import { sectionRegistry } from "./sectionRegistry";

interface ITemplateProps {
  tenant: Tenant | undefined;
}

const Template = ({ tenant }: ITemplateProps) => {
  return (
    <div>
      <div>Template {tenant?.tenantName}</div>

      {tenant?.sections?.map((sec) => {
        const Component = sectionRegistry[sec.name]; // dynamic resolution

        if (!Component) return null; // silently skip unknown sections

        return (
          <div key={sec.name}>
            <Component variant={tenant?.template?.variant} />
          </div>
        );
      })}
    </div>
  );
};

export default Template;
