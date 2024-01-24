import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./pages/IndexPage";
import TaskPage from "./pages/TaskPage";
import ProtectedRoute from "./ProtectedRoute";
import CreateTask from "./pages/CreateTask";
import TaskProvider from "./context/TaskContext";
import NavBar from "./components/NavBar";
import Calendary from "./pages/AgendPage";
import Calendario from "./pages/CalendarioNuevo";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TaskProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />ç
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/add-task" element={<CreateTask />} />
              <Route path="/tasks/:id" element={<CreateTask />} />
              <Route path="/profile" element={<h1> Profile</h1>} />
              <Route path="/calendary" element={<Calendary />} />
              <Route path="/calendario" element={<Calendario />} />
            </Route>
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
