export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  remember?: boolean;
}

const User: IUser = {
  email: "admin@demo.com",
  password: "123456",
  firstName: "Rabea",
  lastName: "Shaban",
};

export default User;
