import type { Tenant } from "@/models/types";
import { sectionRegistry } from "./sectionRegistry";
import Header from "./sections/Header";
import type headerVariants from "./variants/headerVariants";

interface ITemplateProps {
  tenant: Tenant | undefined;
}

const Template = ({ tenant }: ITemplateProps) => {
  const wrapperClassName =
    tenant?.template?.variant === "simple" ? "max-w-[1024px] m-auto px-4" : "";

  return (
    <div className={wrapperClassName} style={{ scrollBehavior: "smooth" }}>
      <Header
        variant={tenant?.template?.variant as keyof typeof headerVariants}
        tenant={tenant}
      />

      {tenant?.sections
        ?.filter((section) => section.name !== "HEADER")
        .map((sec) => {
          const Component = sectionRegistry[sec.name]; // dynamic resolution

          if (!Component) return null; // silently skip unknown sections

          return (
            <div key={sec.name} id={sec?.menu?.slug} className="scroll-mt-24">
              <Component
                tenantId={tenant.tenantSlug}
                sectionId={sec.id}
                variant={tenant?.template?.variant}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Template;
