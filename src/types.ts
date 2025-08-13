import type { ElementType } from 'react';

export interface Feature {
  icon: ElementType;
  title: string;
  body: string;
}

export interface Testimonial {
  name: string;
  title: string;
  university: string;
  quote: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthly: number;
  yearly: number;
  tagline: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}
