export type Section = {
  id: number;
  name: string;
  menu: {
    label: string;
    slug: string;
    isActive: number;
  };
};

export type Tenant = {
  tenantId: number;
  tenantSlug: string;
  tenantName: string;
  template: {
    id: number;
    isActive: number;
    variant: string;
  };
  sections: Array<Section>;
};

export type SectionVariant = "simple" | "";
