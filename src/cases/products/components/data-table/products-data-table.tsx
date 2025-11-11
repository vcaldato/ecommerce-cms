import { DataTable } from "@/components/ui/data-table";
import { productColumns } from "./products-columns";
import { useProducts } from "../../hooks/use-products";

export function ProductDataTable() {
  const { data: products, isLoading } = useProducts();

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <DataTable columns={productColumns} data={products!} />
      )}
    </div>
  );
}
