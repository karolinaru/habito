export interface Habit {
  id: string;
  classification?: string | number;
  recurrence?: string | number;
  frequency?: string | number;
  reminder?: string | number;
}
