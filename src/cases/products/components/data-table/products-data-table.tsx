import { productsColumns } from "./products-columns";
import { useProducts } from "../../hooks/use-products";
import { DataTable } from "@/components/ui/data-table";

export function ProductsDataTable() {
  const { data: products, isLoading } = useProducts();

  return (
    <div>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <DataTable columns={productsColumns} data={products!} />
      )}
    </div>
  );
}
