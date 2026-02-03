import type { IUser } from "../Data/Users";

export const loginUser = (user: IUser) => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", user.email);
  localStorage.setItem("userName", `${user.firstName} ${user.lastName}`);
};

export const logoutUser = () => {
  localStorage.clear();
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isLoggedIn") === "true";
};
