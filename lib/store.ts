import { create } from 'zustand';

type State = {
  isNavOpen: boolean;
};

type Actions = {
  toggleNav: () => void;
  closeNav: () => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
  isNavOpen: false,
  toggleNav: () =>
    set((state) => ({
      isNavOpen: !state.isNavOpen,
    })),
  closeNav: () =>
    set(() => ({
      isNavOpen: false,
    })),
}));
