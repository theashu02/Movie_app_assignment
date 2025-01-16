import {create} from "zustand";

interface NavigationState {
  query: string;
  setQuery: (query: string) => void;
}

const useNavigationStore = create<NavigationState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));

export default useNavigationStore;
