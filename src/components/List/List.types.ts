export interface ListProps {
  listTitle: string;
  itens?: ItensProps[];
}

export interface ItensProps {
  itemTitle: string;
  descriptiom?: string;
  time?: string;
}
