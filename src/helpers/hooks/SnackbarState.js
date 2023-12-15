import { create } from 'zustand';

const useSnackbarStore = create((set) => ({
  show: false,
  message: '',
  type: 'info',
  variant: '',
  setShow: (show) => set({ show }),
  setMessage: (message) => set({ message }),
  setType: (type) => set({ type }),
  setVariant: (variant) => set({ variant }),
  showSnackbar: ({ show, message, type, variant }) => {
    set({ show, message, type, variant });
    setTimeout(() => set({ show: false }), 5000);
  },
}));

export const useSnackbar = () => useSnackbarStore((state) => state);
