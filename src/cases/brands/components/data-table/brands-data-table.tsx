import { brandsColumns } from "./brands-columns";
import { useBrands } from "../../hooks/use-brands";
import { DataTable } from "@/components/ui/data-table";

export function BrandsDataTable() {
  const { data: brands, isLoading } = useBrands();

  return (
    <div>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <DataTable columns={brandsColumns} data={brands!} />
      )}
    </div>
  );
}
