import { Menu } from "lucide-react";
import { InputFilter, ListStyles, Sidebar } from "./styles";

export function AsideBar() {
  return (
    <Sidebar>
      <Menu size={24} />
      <InputFilter type="text" placeholder="Search here"/>

      <ListStyles>
        <li>MPB</li>
        <li>Sertanejo Brasil</li>
      </ListStyles>
    </Sidebar>
  )
}