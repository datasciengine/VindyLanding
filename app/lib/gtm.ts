// GTM DataLayer type definitions
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push event to GTM dataLayer
 */
export const pushToDataLayer = (eventData: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

/**
 * Track CTA button click
 */
export const trackCTAClick = (
  buttonText: string,
  buttonLocation: string,
  buttonUrl?: string
) => {
  pushToDataLayer({
    event: "cta_click",
    button_text: buttonText,
    button_location: buttonLocation,
    button_url: buttonUrl || window.location.href,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percent: number) => {
  pushToDataLayer({
    event: "scroll_depth",
    percent_scrolled: percent,
  });
};

/**
 * Track form submission (for future use)
 */
export const trackFormSubmission = (formName: string, formId?: string) => {
  pushToDataLayer({
    event: "generate_lead",
    form_name: formName,
    form_id: formId,
  });
};

/**
 * Track page view (for SPA navigation if needed)
 */
export const trackPageView = (url: string, title?: string) => {
  pushToDataLayer({
    event: "page_view",
    page_url: url,
    page_title: title || document.title,
  });
};
