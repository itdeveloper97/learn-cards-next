import { User } from "@firebase/auth";
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type UserState = {
  user: User | null;
};

export type UserActions = {
  set: (user: User) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    persist(
      (set) => ({
        ...initState,
        set: (user) => set(() => ({ user })),
      }),
      {
        name: "user",
      },
    ),
  );
};
