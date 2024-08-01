// custom.d.ts
declare module '@theme/Layout' {
    import { ComponentType } from 'react';
    const Layout: ComponentType;
    export default Layout;
  }
  
  declare module '@docusaurus/router' {
    import { ComponentType } from 'react';
    export const Redirect: ComponentType;
    export const Route: ComponentType;
    export const BrowserRouter: ComponentType;
    export const Switch: ComponentType;
  }
  
  declare module '@docusaurus/useDocusaurusContext' {
    const useDocusaurusContext: () => {
      siteConfig: {
        title: string;
        description: string;
      };
    };
    export default useDocusaurusContext;
  }