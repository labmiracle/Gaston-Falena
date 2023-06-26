import { ReactNode } from "react";
interface ItemListProps {
    children: ReactNode;
  }
export default function ItemList(props: ItemListProps) {
  return (
    <li>{props.children}</li>
  )
}
