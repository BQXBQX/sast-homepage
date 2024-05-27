import React from "react";

interface MainLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout = ({ header, children, footer }: MainLayoutProps) => {
  return (
    <>
      <div>
        {header}
        <div>{children}</div>
        <div>{footer}</div>
      </div>
    </>
  );
};

export default MainLayout;
