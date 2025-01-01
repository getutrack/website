export interface SubscriptionPlanFeature {
  text: string;
  hint?: string;
  label?: string;
  style?: Record<string, string>;
}
export interface SubscriptionPlan {
  name: string;
  slug: string;
  description: string;
  features: SubscriptionPlanFeature[];
  featured?: boolean;
  monthlyPrice: string;
  monthlyPriceLabel: string;
  annuallyPrice: string;
  annuallyPriceLabel: string;
  monthlyVariantId: string;
  annuallyVariantId: string;
}

export const SubscriptionPlans = [
  {
    name: 'Free',
    slug: 'utrack_free',
    description:
      'No-frills project management for small teams.',
    features: [
      { text: 'Projects and Issues' },
      { text: 'Cycles and Modules' },
      { text: 'Layouts and Views' },
      { text: 'Intake' },
      { text: 'Estimates' },
      { text: 'Pages' },
      { text: 'APIs' },
      { text: '12 Seats' }
    ],
    monthlyPrice: '$0',
    monthlyPriceLabel: 'per member per month',
    annuallyPrice: '$0',
    annuallyPriceLabel: 'per member per month',
  },

  {
    name: 'Utrack Pro',
    slug: 'utrack_pro',
    description:
      'Designed and built for mature teams that need more.',
    features: [
      { text: 'Everything in Free +' },
      { text: 'Custom Issues + Properties' },
      { text: 'Issue templates' },
      { text: 'Full Time Tracking' },
      { text: 'Cycle Reports' },
      { text: 'Custom Dashboard Widgets' },
      { text: 'Automation and Workflows' },
      { text: 'Full Jira and GitHub imports' },
      { text: 'Unlimited Members, up to 5 Guests' },
    ],
    monthlyPrice: '$19',
    monthlyPriceLabel: 'per member per month',
    annuallyPrice: '$15',
    annuallyPriceLabel: 'per member per month',
  },

  {
    name: 'Utrack Business',
    slug: 'business',
    description:
      'Best for group PMs, larger teams, and greater workflow controls.',
    features: [
      { text: 'Everything in Pro +'},
      { text: 'RBAC' },
      { text: 'Project Templates' },
      { text: 'Baselines And Deviations' },
      { text: 'Custom Reports' },
      { text: 'Scheduled Comms' },
      { text: 'Intake Forms' },
      { text: 'API-enabled Activity Logs' },
      { text: 'Unlimited Members, up to 5 Guests' },
    ],
    monthlyPrice: 'Quote on request',
    monthlyPriceLabel: 'per member per month',
    annuallyPrice: 'Quote on request',
    annuallyPriceLabel: 'per member per month',
    featured: true,
  },

  {
    name: 'Utrack Enterprise',
    slug: 'enterprise',
    description:
      'Custom plans that include wishlist bells and whistles.',
    features: [
      { text: 'Everything in Business +'},
      { text: 'Private + managed deployments' },
      { text: 'GAC' },
      { text: 'LDAP support' },
      { text: 'Databases + Formulas' },
      { text: 'Unlimited Automation Flows' },
      { text: 'API-enabled Audit Logs' },
      { text: 'Full-suite professional services' },
      { text: 'Unlimited Members, up to 5 Guests' },
    ],

    monthlyPrice: 'Quote on request',
    monthlyPriceLabel: 'per member per month',
    annuallyPrice: 'Quote on request',
    annuallyPriceLabel: 'per member per month',
  },

] as SubscriptionPlan[];
