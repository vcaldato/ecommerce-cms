import { BreadCrumb } from "@/components/layout/bread-crumb";
import { BrandsDataTable } from "./brands-data-table";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";

export function BrandsLayout() {
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/brands/create");
  }

  return (
    <div className="p-4">
      <BreadCrumb title="Brands" />

      <div className="flex flex-col py-4 gap-4 my-4"></div>

      <div className="flex flex-row justify-end gap-4">
        <InputGroup className="max-w-96">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <Button onClick={handleCreate}>
          <Plus />
          Adicionar
        </Button>
      </div>
      <div>
        <BrandsDataTable />
        <Outlet />
      </div>
    </div>
  );
}
