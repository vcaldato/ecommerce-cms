import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CategoryLayout } from "./cases/category/components/data-table/category-layout";
import { CategoryForm } from "./cases/category/components/data-table/category-form";
import { BrandLayout } from "./cases/brands/components/data-table/brands-layout";
import { BrandForm } from "./cases/brands/components/data-table/brands-form";
import { ProductLayout } from "./cases/products/components/data-table/products-layout";
import { ProductForm } from "./cases/products/components/data-table/products-form";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <div className="wrapper">
      <SidebarProvider>
        <main className="w-full">
          <Routes>
            <Route path="/categories" element={<CategoryLayout />}>
              <Route path="new" element={<CategoryForm />} />
              <Route path=":id" element={<CategoryForm />} />
            </Route>

            <Route path="/brands" element={<BrandLayout />}>
              <Route path="new" element={<BrandForm />} />
              <Route path=":id" element={<BrandForm />} />
            </Route>

            <Route path="/products" element={<ProductLayout />}>
              <Route path="new" element={<ProductForm />} />
              <Route path=":id" element={<ProductForm />} />
            </Route>
          </Routes>
        </main>
      </SidebarProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
