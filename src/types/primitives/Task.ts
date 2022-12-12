export interface Task {
  id: string;
  name: string;
  completed?: boolean;
  start_date?: Date | null;
  end_date?: Date | null;
  created_at?: string;
}
