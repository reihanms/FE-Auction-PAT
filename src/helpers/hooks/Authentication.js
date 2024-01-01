import { create } from "zustand";
import { getProfile, postLogin } from "../actions/api";
import Swal from "sweetalert2";

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
        console.log(response);
        const { code, message } = response;

        if (code === 200) {
          Swal.fire({
            icon: "success",
            title: "Login Success!",
            text: "Welcome",
            confirmButtonText: "OK",
          });
          const userProfile = await getProfile();
          set({ user: userProfile.data });
          return response;
        }
        else {
          Swal.fire({
            icon: "error",
            title: "Fail!",
            text: message,
            confirmButtonText: "Back",
          });
          return { error: message };
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