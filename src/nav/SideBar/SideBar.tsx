import * as React from "react";
import { Nav, INavLinkGroup } from "@fluentui/react/lib/Nav";
import "./SideBar.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SideBar: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const [selectedKey, setSelectedKey] = useState<string>("");
  const location = useLocation();

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: t("Home"),
          url: "/",
          expandAriaLabel: "Home section",
          key: "home",
        },
        {
          name: t("Your habits"),
          // url: "/summary",
          url: "/habito/summary",
          key: "summary",
        },
        {
          name: t("Daily habits"),
          url: "/habito/daily",
          // url: "/daily",
          key: "daily",
        },
        {
          name: t("Weekly habits"),
          url: "/habito/weekly",
          // url: "/weekly",
          key: "weekly",
        },
      ],
    },
  ];

  useEffect(() => {
    const currentRoute = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    setSelectedKey(currentRoute);
  }, [location.pathname]);

  return (
    <Nav
      selectedKey={selectedKey === "" ? "home" : selectedKey}
      ariaLabel="Nav"
      groups={navLinkGroups}
      className="sidebar"
    />
  );
};
