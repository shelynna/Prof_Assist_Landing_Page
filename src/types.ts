export interface Feature {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  title: string;
  university: string;
  quote: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}
