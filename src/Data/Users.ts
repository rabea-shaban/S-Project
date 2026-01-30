export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  remember: boolean;
}
const user: IUser = {
  id: "1",
  firstName: "Rabea",
  lastName: "shaban",
  email: "rabea@gmail.com",
  password: "123456",
  role: "user",
  createdAt: new Date(),
  updatedAt: new Date(),
  remember: false,
};

export default user;
