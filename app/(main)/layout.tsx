import React from "react";

interface MainLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout = ({ header, children }: MainLayoutProps) => {
  return (
    <>
      <div>
        <div>{header}</div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
