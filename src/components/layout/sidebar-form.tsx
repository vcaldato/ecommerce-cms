import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

import { Button } from "../ui/button";
import { useNavigate, useLocation } from "react-router-dom";

type SidebarFormProps = {
  title: string;
  children: React.ReactNode;
  onSave: () => void;
};
export function SidebarForm({ title, children, onSave }: SidebarFormProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleCloseForm(open: boolean) {
    if (!open) {
      const currentPath = location.pathname;
      const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
      navigate(newPath);
    }
  }
  return (
    <Sheet open={true} onOpenChange={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <title>{title}</title>
          </SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em salvar.
          </SheetDescription>
        </SheetHeader>

        {children}

        <SheetFooter>
          <div className="flex-row gap-1">
            <Button onClick={onSave}>Salvar</Button>

            <SheetClose asChild>
              <Button variant="outline">Cancelar</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
