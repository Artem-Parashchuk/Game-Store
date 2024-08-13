import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import { HomePage } from "./pages/HomePages/HomePage";
import { Header } from "./components/Header/Header";
import { GamePage } from "./pages/GamePage/GamePage";
import { OrderPage } from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <>
      <div className={s.header}>
        <Header />
      </div>

      <div className={s.app}>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/games/:title"
            element={<GamePage />}
          />
          <Route
            path="/order"
            element={<OrderPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
