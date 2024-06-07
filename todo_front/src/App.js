import "./App.css";
import TodoPage from "./todoList/pages/TodoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo/list/:id" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;