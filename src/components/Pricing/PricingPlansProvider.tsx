import { useState, createContext, useContext } from 'react';

interface PricingProviderProp {
  children: React.ReactNode;
}

interface PricingContextValue {
  isAnnually: boolean;
  setIsAnnually: any;
}

const PricingContext = createContext<PricingContextValue>(
  {} as PricingContextValue
);

export function PricingProvider({ children }: PricingProviderProp) {
  const [isAnnually, setIsAnnually] = useState<boolean>(false);

  return (
    <PricingContext.Provider value={{ isAnnually, setIsAnnually }}>
      {children}
    </PricingContext.Provider>
  );
}

export const usePricingContext = () => {
  return useContext(PricingContext);
};
