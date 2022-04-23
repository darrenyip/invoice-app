import create from "zustand";
import _ from "lodash";
const useStore = create((set, get) => ({
    modalEditToggle: 0,
    modalNewToggle: 0,
    invoices: [],
    theme: "light",
    options: [],
    filteredInvoice: [],
    removeInvoice: (invoiceId) =>
        set((state) => ({
            invoices: state.invoices.filter((invoice) => invoice._id !== invoiceId),
        })),
    updateStatus: (invoiceId) =>
        set((state) => ({
            invoices: state.invoices.map((item) => {
                if (invoiceId === item._id) {
                    return {
                        ...item,
                        status: "Paid",
                    };
                } else {
                    return item;
                }
            }),
        })),

    updateInvoice: (invoiceId, invoiceDetail) =>
        set((state) => ({
            invoices: state.invoices.map((item) => {
                console.log(invoiceId, item._id);
                if (item._id === invoiceId) {
                    return {
                        ...item,
                        // price: invoiceDetail.price,
                        due: invoiceDetail.due,
                        status: invoiceDetail.status,
                        bill_from_street: invoiceDetail.bill_from_street,
                        bill_from_city: invoiceDetail.bill_from_city,
                        bill_from_postCode: invoiceDetail.bill_from_postCode,
                        bill_from_country: invoiceDetail.bill_from_country,
                        bill_to_street: invoiceDetail.bill_to_street,
                        bill_to_city: invoiceDetail.bill_to_city,
                        bill_to_postCode: invoiceDetail.bill_to_postCode,
                        bill_to_country: invoiceDetail.bill_to_country,
                        email: invoiceDetail.email,
                        invoice_date: invoiceDetail.invoice_date,
                        payment_terms: invoiceDetail.payment_terms,
                        project_description: invoiceDetail.project_description,
                        products: invoiceDetail.products,
                    };
                } else {
                    return item;
                }
            }),
        })),
    flipTheme: (theme) => set((state) => ({...state, theme })),
    setInvoices: (invoices) => set((state) => ({...state, invoices })),
    addOption: (option) =>
        set((state) => ({...state, options: [...state.options, ...option] })),
    setOptions: (options) => set((state) => ({ options })),
    setModalEditToggleON: () => set({ modalEditToggle: 1 }),
    setModalEditToggleOFF: () => set({ modalEditToggle: 0 }),
    setModalNewToggleON: () => set({ modalNewToggle: 1 }),
    setModalNewToggleOFF: () => set({ modalEditToggle: 0 }),
    removeOption: (option) =>
        set((state) => ({
            options: state.options.filter((item) => item !== option),
        })),
    doFilter: (prop) =>
        set((state) => ({
            filteredInvoice: _.filter(state.invoices, function(invoice) {
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