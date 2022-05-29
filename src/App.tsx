import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ClientPage from "./pages/Client";
import EmployeePage from "./pages/Employee";
import "./style.css";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees/:employeeId" element={<EmployeePage />} />
        <Route path="/clients/:clientId" element={<ClientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
