import * as React from "react";

export type LayoutProps = {
  children: React.ReactNode | JSX.Element | null | boolean;
};

// @ts-ignore
const Layout: React.FC<LayoutProps> = ({ children }) => {const LayoutSwitch = () => {
      return (
          <div className="w-full h-full min-h-screen">
            <div className="min-h-[calc(100vh-423px)] lg:mt-0">
              {children}
            </div>
          </div>)
  };

  return LayoutSwitch();
};

export default Layout;
