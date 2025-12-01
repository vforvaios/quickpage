const db = require("../services/db");

const getWholeTenant = async (req, res, next) => {
  try {
    const tenantName = req.params.id;

    const [
      tenantId,
    ] = await db.query(`SELECT tenant_id FROM TENANTS WHERE name=?`, [
      tenantName,
    ]);
    const [rows] = await db.query(
      `SELECT 
        t.id AS tenant_id, 
        t.name AS tenant_name, 
        t.tenant_id AS tenant_slug, 
        t.template_id AS template_id, 
        tmp.isActive AS template_is_active,
        tmp.variant AS template_variant, 
        ps.id AS section_id, 
        ps.name AS section_name
       FROM TENANTS t 
       JOIN TEMPLATES tmp ON tmp.id = t.template_id 
       JOIN TEMPLATES_PAGE_SECTIONS tps ON tps.template_id = t.template_id 
       JOIN PAGE_SECTIONS ps ON ps.id = tps.page_section_id 
       WHERE t.tenant_id = ? `,
      [tenantId[0].tenant_id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const first = rows[0];
    const response = {
      tenantId: first.tenant_id,
      tenantSlug: first.tenant_slug,
      tenantName: first.tenant_name,
      template: {
        id: first.template_id,
        isActive: first.template_is_active,
        variant: first.template_variant,
      },
      sections: rows.map((r) => ({
        id: r.section_id,
        name: r.section_name,
        order: r.section_order,
      })),
    };
    res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  getWholeTenant,
};
