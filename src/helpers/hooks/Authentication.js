import { create } from "zustand";
import { getProfile, postLogin } from "../actions/api";

const useAuthStore = create((set) => {
  return {
    user: null,
    init: async () => {
      try {
        const userProfile = await getProfile();
        set({ user: userProfile.data });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    login: async (payload) => {
      try {
        const response = await postLogin(payload);

        if (!response.error) {
          const userProfile = await getProfile();
          set({ user: userProfile.data });
          return response;
        } else {
          return { error: response.error };
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    logout: () => {
      set({ user: null });
    },
  };
});

export const useAuth = () => useAuthStore((state) => state);