import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { ConfPage } from "../Pages/ConfPage";
import { PersonalPage } from "../Pages/PersonalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/conf" element={<ConfPage />} />
      <Route path="/personal" element={<PersonalPage />}></Route>
    </Routes>
  );
}

export default App;
