import create from "zustand";
import _ from "lodash";
const useStore = create((set, get) => ({
  invoices: [],
  theme: "light",
  options: [],
  filteredInvoice: [],
  flipTheme: (theme) => set((state) => ({ ...state, theme })),
  setInvoices: (invoices) => set((state) => ({ ...state, invoices })),
  addOption: (option) =>
    set((state) => ({ ...state, options: [...state.options, ...option] })),
  setOptions: (options) => set((state) => ({ options })),
  removeOption: (option) =>
    set((state) => ({
      options: state.options.filter((item) => item !== option),
    })),
  doFilter: (prop) =>
    set((state) => ({
      filteredInvoice: _.filter(state.invoices, function (invoice) {
        let checker = false;
        state.options.forEach((el) => {
          if (el === invoice.status) {
            checker = true;
          }
        });
        return checker;
      }),
    })),
}));

export default useStore;
