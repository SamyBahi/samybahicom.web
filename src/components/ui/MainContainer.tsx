import { PropsWithChildren } from "react";

const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:pt-24">
      {children}
    </main>
  );
};

export default MainContainer;
