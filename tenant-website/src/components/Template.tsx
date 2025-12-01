import type { Tenant } from "@/models/types";
import { sectionRegistry } from "./sectionRegistry";

interface ITemplateProps {
  tenant: Tenant | undefined;
}

const Template = ({ tenant }: ITemplateProps) => {
  const wrapperClassName =
    tenant?.template?.variant === "simple" ? "max-w-[1024px] m-auto px-4" : "";

  return (
    <div className={wrapperClassName}>
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
