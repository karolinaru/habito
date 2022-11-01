import React, {
  useState,
  FunctionComponent,
  useEffect,
  createContext,
} from "react";
import { habits } from "../data/habits";
import { users } from "../data/users";
import { Habit } from "../models/habit";
import { User } from "../models/user";

interface IHabitContextProps {
  habitsData: Habit[] | undefined;
  usersData: User[];
  addNewHabit: (habit: Habit) => void;
  addNewUser: (user: User) => void;
  updateHabits: (habits: Habit[]) => void;
}

export const HabitContext = createContext<IHabitContextProps>({
  habitsData: [],
  usersData: [],
  addNewHabit: (habit: Habit) => {},
  addNewUser: (user: User) => {},
  updateHabits: (habits: Habit[]) => {},
});

export interface IHabitContextProviderProps {
  children: any;
}

const HabitContextProvider: FunctionComponent<IHabitContextProviderProps> = (
  props: IHabitContextProviderProps
) => {
  const [habitsData, setHabitsData] = useState<Habit[]>();
  const [usersData, setUsersData] = useState<User[]>(users);

  useEffect(() => {
    setHabitsData(habits);
  }, []);

  const updateHabits = (habits: Habit[]) => {
    setHabitsData(habits);
  };

  const addNewHabit = (habit: Habit) => {
    const habitsArray = [...habitsData!];
    habitsArray.push(habit);
    setHabitsData(habitsArray);
  };

  const addNewUser = (newUser: User) => {
    const usersArray = [...users];
    usersArray.push(newUser);
    setUsersData(usersArray);
  };

  const contextValue = {
    habitsData: habitsData,
    usersData: usersData,
    addNewHabit: addNewHabit,
    addNewUser: addNewUser,
    updateHabits: updateHabits,
  };

  return (
    <HabitContext.Provider value={contextValue}>
      {props.children}
    </HabitContext.Provider>
  );
};

export default HabitContextProvider;
