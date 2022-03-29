import Navbar from "./components/navbar";
import useStore from "./services/store";
import clsx from "clsx";
import Invoices from "./components/invoices";

import "./App.scss";

function App() {
  const theme = useStore((state) => state.theme);

  const AppClasses = clsx({
    App: true,
    "d-flex-lg": true,
    dark: theme === "dark",
    light: theme !== "dark",
  });
  // console.log(AppClasses);
  return (
    <div className={AppClasses}>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Invoices />
      </main>
    </div>
  );
}

export default App;
