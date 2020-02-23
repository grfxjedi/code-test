export interface Graph {
  id: string;
  title: string;
  children?: Array<any>;
  book_id?: string;
}

export type GraphRequiredProps = Pick<Graph, "id" | "title">;
