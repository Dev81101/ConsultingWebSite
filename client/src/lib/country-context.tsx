import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { countrySchema, type Country, COUNTRY_NAMES } from '@shared/schema';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  countries: Country[];
  countryNames: Record<Country, string>;
  isLoading: boolean;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
}

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  const countries: Country[] = ['rs', 'mk', 'me', 'ba'];
  
  // Extract country from current path
  const pathParts = location.split('/').filter(Boolean);
  const currentCountryFromPath = pathParts[0];
  
  // Get stored country preference or return undefined for geo-detection
  const getStoredCountry = (): Country | undefined => {
    try {
      const stored = localStorage.getItem('preferredCountry');
      if (stored && countries.includes(stored as Country)) {
        return stored as Country;
      }
    } catch {
      // localStorage might not be available
    }
    return undefined;
  };
  
  const [country, setCountryState] = useState<Country>(() => {
    if (currentCountryFromPath && countries.includes(currentCountryFromPath as Country)) {
      return currentCountryFromPath as Country;
    }
    return getStoredCountry() || 'rs';
  });
  
  // Auto-detect country if we're on root path
  useEffect(() => {
    if (location === '/') {
      setIsLoading(true);
      
      // Check stored preference first
      const storedCountry = getStoredCountry();
      
      // If we have a stored preference, use it
      if (storedCountry) {
        setLocation(`/${storedCountry}`);
        setCountryState(storedCountry);
        setIsLoading(false);
        return;
      }
      
      // Otherwise, detect from server
      fetch('/api/geo')
        .then(res => res.json())
        .then(data => {
          const detectedCountry = data.country as Country;
          if (countries.includes(detectedCountry)) {
            setCountryState(detectedCountry);
            setLocation(`/${detectedCountry}`);
          } else {
            setCountryState('rs');
            setLocation('/rs');
          }
        })
        .catch(() => {
          // Fallback to default
          setCountryState('rs');
          setLocation('/rs');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [location, setLocation]);
  
  // Update country when path changes
  useEffect(() => {
    if (location !== '/') {
      const pathParts = location.split('/').filter(Boolean);
      const countryFromPath = pathParts[0];
      
      if (countryFromPath && countries.includes(countryFromPath as Country)) {
        const newCountry = countryFromPath as Country;
        if (newCountry !== country) {
          setCountryState(newCountry);
        }
      }
    }
  }, [location, country]);
  
  const setCountry = (newCountry: Country) => {
    setCountryState(newCountry);
    
    // Store preference
    try {
      localStorage.setItem('preferredCountry', newCountry);
    } catch {
      // localStorage might not be available
    }
    
    // Update URL while preserving the rest of the path
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts.length > 0 && countries.includes(pathParts[0] as Country)) {
      pathParts[0] = newCountry; // Replace country
    } else {
      pathParts.unshift(newCountry); // Add country at beginning
    }
    
    const newPath = '/' + pathParts.join('/');
    setLocation(newPath);
  };
  
  return (
    <CountryContext.Provider value={{
      country,
      setCountry,
      countries,
      countryNames: COUNTRY_NAMES,
      isLoading
    }}>
      {children}
    </CountryContext.Provider>
  );
}