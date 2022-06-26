import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Nav from "components/Nav";
import WalletConnect from "components/WalletConnect";

const MainLayout = () => {
  const navitage = useNavigate();
  const pages = [
    {
      isTotalBlood: false,
      label: "migrate",
      router: "/app/migrate",
    },
    {
      isTotalBlood: true,
      label: "risky game",
      router: "/app/risky-game",
    },
    {
      isTotalBlood: true,
      label: "wool pouches",
      router: "/app/wool-pouches",
    },
    {
      isTotalBlood: true,
      label: "land",
      router: "/app/land",
    },
    {
      isTotalBlood: true,
      label: "alpha game",
      router: "/app/alpha-game",
    },
    {
      isTotalBlood: true,
      label: "whitepaper",
      router: "/app/whitepaper",
    },
  ];

  const handlePage = (page: string) => {
    navitage(page);
  };

  return (
    <div>
      <Nav handleGoPage={(page) => handlePage(page)} pages={pages} />
      <WalletConnect pages={pages} />
      <main>
        <div className="Mp5">
          <div className="px-16">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
