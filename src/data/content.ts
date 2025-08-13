import type { Feature, Testimonial, PricingPlan } from '../types';
import { Zap, Target, BarChart2, Cpu } from 'react-feather';

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: 'AI-Powered Email Crafting',
    body: 'Generate personalized outreach that professors actually respond to. We parse publication abstracts, lab pages, and your profile for a tailored message.',
  },
  {
    icon: Target,
    title: 'Application Strategy Builder',
    body: 'Convert raw matches into a prioritized action plan. See impact vs. competitiveness, schedule outreach, and track progression status.',
  },
  {
    icon: BarChart2,
    title: 'Research Alignment Analyzer',
    body: 'Move beyond keyword overlap. We evaluate semantic trajectories, methodology overlaps, and emerging synergy potential.',
  },
   {
    icon: Cpu,
    title: 'AI Suggestions',
    body: 'Context-aware recommendations to streamline decision making.',
  },
];


export const TESTIMONIALS: Testimonial[] = [
  { name: 'Sarah K.', title: 'Biology PhD Candidate', university: 'MIT', quote: "The alignment insights gave me precise angles for outreach. I secured two interviews within a week.", image: 'https://picsum.photos/seed/person1/96/96' },
  { name: 'Michael T.', title: 'Computer Science MSc', university: 'Stanford', quote: "Saved me days of manual drafting. Professors commented on how personal my emails felt.", image: 'https://picsum.photos/seed/person2/96/96' },
  { name: 'Aisha P.', title: 'Chemistry PhD Candidate', university: 'U of T', quote: "I stopped mass emailing. Focused, high-quality outreach made all the difference.", image: 'https://picsum.photos/seed/person3/96/96' }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    monthly: 0,
    yearly: 0,
    tagline: 'Get started with essential tools',
    features: [
      'Import up to 5 matches',
      'Basic email scaffolds',
      '7-day outreach tracking',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 5,
    yearly: 50,
    tagline: 'Advanced toolkit for serious applicants',
    features: [
      'Unlimited match imports',
      'AI email & follow-up generation',
      '4-week conversation analytics',
      'Priority support',
      'Alignment analyzer',
      'Strategy timeline builder',
    ],
    cta: 'Choose Pro',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    monthly: 15,
    yearly: 150,
    tagline: 'Full strategic & editorial suite',
    features: [
      'Everything in Pro',
      'Interview readiness module',
      'Custom research statement drafts',
      'Advisor-style feedback summaries',
      'Advanced funding opportunity hints',
      'Dedicated success liaison',
    ],
    cta: 'Choose Premium',
    highlighted: false,
  },
];


export const FAQS = [
  { q: 'How does Prof Assist connect to my other tools?', a: 'One-click import uses secure tokens to sync your saved or shortlisted professors, preserving filters and metadata.' },
  { q: 'Do I need AI knowledge to use it?', a: 'Not at all. Prompts are auto-generated based on your academic profile and professor data.' },
  { q: 'Can I tailor tone and formality?', a: 'Yes—select tone presets (Neutral, Enthusiastic, Technical, Collaborative) or refine manually.' },
  { q: 'What data do you store?', a: 'Only necessary outreach context and anonymized interaction metrics. You control removal at any time.' },
  { q: 'Does sending emails happen inside the platform?', a: 'You can copy drafts or connect an email account via OAuth. We never store raw credentials.' }
];
