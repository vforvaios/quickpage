export type Section = {
  id: number;
  name: string;
};

export type Tenant = {
  tenantId: number;
  tenantSlug: string;
  template: {
    id: number;
    isActive: number;
  };
  sections: Array<Section>;
};
