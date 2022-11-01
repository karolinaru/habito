import { Habit } from "./habit";

export interface User {
  id: string;
  login: string;
  password: string;
  habit?: Habit[];
}
