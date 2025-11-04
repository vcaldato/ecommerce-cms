import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CategoryLayout } from "./cases/category/components/data-table/category-layout";
import { CategoryForm } from "./cases/category/components/data-table/category-form";

function App() {
  return (
    <div className="wrapper">
      <main>
        <Routes>
          <Route path="/categories" element={<CategoryLayout />} />
          <Route path="new" element={<CategoryForm />} />
          <Route path=":id" element={<CategoryForm />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
