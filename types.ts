export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  client: string;
  category: string;
  image: string;
  stats: { label: string; value: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
