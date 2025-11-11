import { DataTable } from "@/components/ui/data-table";
import { brandColumns } from "./brands-columns";
import { useBrands } from "../../hooks/use-brands";

export function BrandsDataTable() {
  const { data: brands, isLoading } = useBrands();

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <DataTable columns={brandColumns} data={brands!} />
      )}
    </div>
  );
}
