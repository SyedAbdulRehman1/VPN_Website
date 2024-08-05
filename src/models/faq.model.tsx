export interface FAQItem {
    id: number;
    category: {
      id: number;
      name: string;
    };
    question: string;
    answer: string;
  }