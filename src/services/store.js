import create from "zustand";
const useStore = create((set) => ({
  invoices: [],
  theme: "dark",
  flipTheme: (theme) => set((state) => ({ ...state, theme })),
  setInvoices: (invoices) => set((state) => ({ ...state, invoices })),
}));

export default useStore;
