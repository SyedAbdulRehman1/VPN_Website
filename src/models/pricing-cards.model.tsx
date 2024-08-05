export interface PlanData {
  id: number;
  title: string;
  description: string;
  short_description: string;
  price_per_month: number;
  total_price_of_plan: number;
  best_price: boolean;
  is_popular: boolean;
  visibility: number;
  save_percent: number;
  payment_interval: number;
  metadata: any | null; // You can replace 'any' with a more specific type if needed
}
