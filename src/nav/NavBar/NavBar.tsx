import React, { FunctionComponent, useContext } from "react";
import "./NavBar.scss";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Chart } from "./../../images/chart.svg";
import {
  Dropdown,
  Icon,
  IconButton,
  IDropdownOption,
  IIconProps,
  ITooltipHostStyles,
  Label,
  Link,
  TooltipHost,
} from "@fluentui/react";
import { useTranslation } from "react-i18next";
import { useId } from "@fluentui/react-hooks";
import i18n from "../../i18n";

interface INavBarProps {
  sideBarVisible: boolean;
  showSideBar: () => void;
}

const NavBar: FunctionComponent<INavBarProps> = ({
  sideBarVisible,
  showSideBar,
}) => {
  const { t } = useTranslation();
  // const { handleLangOnChange } = useContext(HabitContext);

  const hamburugerIcon: IIconProps = { iconName: "CollapseMenu" };
  const cancelIcon: IIconProps = { iconName: "Cancel" };

  const langOptions: IDropdownOption[] = [
    { key: "pl", text: "PL" },
    { key: "en", text: "EN" },
  ];

  const handleLangOnChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    if (option?.key === "pl") {
      localStorage.setItem("language", "pl-PL");
      i18n.changeLanguage("pl-PL");
      document.documentElement.setAttribute("lang", "pl");
    }
    if (option?.key === "en") {
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
      document.documentElement.setAttribute("lang", "en");
    }
  };

  const onRenderPlaceholder = () => {
    return (
      <div className="dropdown-placeholder">
        <Icon iconName={"LocaleLanguage"} aria-hidden="true" />
      </div>
    );
  };

  const calloutProps = { gapSpace: 0 };
  const hostStyles: Partial<ITooltipHostStyles> = {
    root: { display: "inline-block" },
  };

  const tooltipId = useId("tooltip");

  return (
    <>
      <div
        className={sideBarVisible ? "nav-bar nav-bar--collapsed" : "nav-bar"}
      >
        <div className="name-wrapper">
          {sideBarVisible ? (
            <IconButton
              iconProps={cancelIcon}
              onClick={showSideBar}
              className="sidebar-button sidebar-button--active"
            />
          ) : (
            <IconButton
              iconProps={hamburugerIcon}
              onClick={showSideBar}
              className="sidebar-button sidebar-button--collapsed"
            />
          )}
          <Label
            className={sideBarVisible ? "app-name app-name--moved" : "app-name"}
          >
            HABITO
          </Label>
        </div>
        <div className="nav-bar--icons">
          <div className="lang">
            <Dropdown
              ariaLabel="Changing language"
              onRenderPlaceholder={onRenderPlaceholder}
              options={langOptions}
              onChange={handleLangOnChange}
            />
          </div>
          <TooltipHost
            content={t("Soon to be")}
            id={tooltipId}
            calloutProps={calloutProps}
            styles={hostStyles}
          >
            <Link disabled to="/statistics" className="linkBtn">
              <Chart />
            </Link>
          </TooltipHost>
          <TooltipHost
            content={t("Soon to be")}
            id={tooltipId}
            calloutProps={calloutProps}
            styles={hostStyles}
          >
            <Link disabled to="/account" className="linkBtn">
              <User />
            </Link>
          </TooltipHost>
        </div>
      </div>
    </>
  );
};

export default NavBar;
