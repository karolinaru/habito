import * as React from "react";
import { Nav, INavLinkGroup } from "@fluentui/react/lib/Nav";
import "./SideBar.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ISideBarProps {
  sideBarVisible: boolean;
  showSideBar: () => void;
}

export const SideBar: React.FunctionComponent<ISideBarProps> = ({
  sideBarVisible,
  showSideBar,
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: t("Home"),
          url: "#/",
          expandAriaLabel: "Home section",
          key: "home",
        },
        {
          name: t("Your habits"),
          url: "#/summary",
          key: "summary",
        },
        {
          name: t("Daily habits"),
          url: "#/daily",
          key: "daily",
        },
        {
          name: t("Weekly habits"),
          url: "#/weekly",
          key: "weekly",
        },
      ],
    },
  ];

  // useEffect(() => {
  //   const currentRoute = location.pathname.substring(
  //     location.pathname.lastIndexOf("/") + 1
  //   );
  //   setSelectedKey(currentRoute);
  // }, [location.pathname]);

  const currentRoute = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  return (
    <Nav
      selectedKey={currentRoute === "" ? "home" : currentRoute}
      ariaLabel="Nav"
      groups={navLinkGroups}
      className="sidebar"
    />
  );
};
