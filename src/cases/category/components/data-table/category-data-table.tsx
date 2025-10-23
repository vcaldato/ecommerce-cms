
import { categoryColumns } from "./category-columns";
import { useCategories } from "../../hooks/use-category.";
import { DataTable } from "@/components/ui/data-table";

export function CategoryDataTable() {

    const {data: categories, isLoading} = useCategories();

  return (
    <div>
        {  isLoading ? (
            <p>Carregando</p>
        ) : (
            <DataTable columns={categoryColumns} data={categories!} />
        )}
    </div>
  );
}
