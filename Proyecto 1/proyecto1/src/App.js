import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import LogIn from "./components/logIn/logIn.js";
import ProtectedRoute from "./components/security/protectedRoute";

function App() {
  return (
    <main>
      {" "}
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
