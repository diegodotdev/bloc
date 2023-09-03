import { create } from "zustand";

interface Props {
  initial: boolean;
  handleInitial: () => void;
}

export const useSideMenuStore = create<Props>((set) => ({
  initial: false,
  handleInitial: () => set((state) => ({ initial: !state.initial })),
}));
