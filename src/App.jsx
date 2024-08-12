import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import { HomePage } from "./pages/HomePages/HomePage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
 