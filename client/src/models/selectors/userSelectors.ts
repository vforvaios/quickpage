const userLoggedIn = ({ userReducer }: any) => userReducer?.user;
const token = ({ userReducer }: any) => userReducer?.user?.token;

export { userLoggedIn, token };
