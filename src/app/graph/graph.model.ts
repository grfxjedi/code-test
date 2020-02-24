export interface Graph {
  id: string;
  title: string;
  children?: Array<any>;
  book_id?: string;
  chapter_id?: string;
  section_id?: string;
  objective_id?: string;
  exercise_id?: string;
}

export interface FlatNode {
  expandable: boolean;
  title: string;
  level: number;
}

export type GraphRequiredProps = Pick<Graph, 'id' | 'title'>;
