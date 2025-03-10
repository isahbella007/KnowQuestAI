// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
    return `${root}${sublink}`;
  }
  
  const ROOTS_AUTH = '/auth';
  const ROOTS_ADMIN = '/admin';
  const ROOTS_DASHBOARD = '/dashboard';
  const ROOTS_ONBOARDING = '/onboarding';
  const ROOTS_ACCOUNT = '/account';
  const ROOTS_BILLING = '/billing';
  const ROOTS_BASE = '/';
  
  // ----------------------------------------------------------------------
  
  export const PATH_AUTH = {
    root: ROOTS_AUTH,
    register: path(ROOTS_AUTH, '/register'),
   
  };
  
  export const PATH_PAGE = {
    
  };
  
  export const PATH_DASHBOARD = {
   
  };
  
  export const PATH_ADMIN = {
    
  };
  
  export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
  