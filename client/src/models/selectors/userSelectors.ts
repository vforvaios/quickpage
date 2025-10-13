const userLoggedIn = ({ userReducer }: any) => userReducer?.user;
const token = ({ userReducer }: any) => userReducer?.user?.token;
const tenant_id = ({ userReducer }: any) =>
  userReducer?.user?.userLoggedIn?.tenant_id;

export { userLoggedIn, token, tenant_id };
