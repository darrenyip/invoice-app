import Navbar from "./components/navbar";
import useStore from "./services/store";
import clsx from "clsx";
import Invoices from "./components/invoices";
import NewInvoice from "./components/newInvoice";
import { Routes, Route } from "react-router-dom";
import InvoiceDetail from "./components/invoiceDetail";
import { fakerData } from "./services/fakeData";
import "./App.scss";

function App() {
    const theme = useStore((state) => state.theme);
    const setInvoices = useStore((state) => state.setInvoices);
    const saveData = fakerData();
    // console.log(saveData);
    setInvoices(saveData);
    const AppClasses = clsx({
        App: true,
        "d-flex-lg": true,
        dark: theme === "dark",
        light: theme !== "dark",
    });
    // console.log(AppClasses);
    return ( <
        div className = { AppClasses } >
        <
        Navbar / >
        <
        main >
        <
        Routes >
        <
        Route path = "/"
        element = { < Invoices / > }
        /> <
        Route path = "invoices"
        element = { < Invoices / > }
        /> <
        Route path = "invoices/:id"
        element = { < InvoiceDetail / > }
        /> <
        Route path = "invoices/new"
        element = { < NewInvoice / > }
        /> <
        /Routes> <
        /main> <
        /div>
    );
}

export default App;