'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }

  // Create a separate component that uses useSearchParams
function GoogleAnalyticsTracking({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID?: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const enableGATracking = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS;
  
    useEffect(() => {
        try {
          if (enableGATracking && pathname && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
              page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
            });
          }
        } catch (error) {
          console.error('Google Analytics tracking error:', error);
        }
    }, [pathname, searchParams, GA_MEASUREMENT_ID, enableGATracking]);
  
    return null;
}

  
// Main component that doesn't directly use useSearchParams
export default function GoogleAnalytics({ GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID?: string }) {
  const enableGATracking = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS;

  if (!enableGATracking) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracking GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  );

} 