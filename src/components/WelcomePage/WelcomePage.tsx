import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.scss";
import { ReactComponent as AddHabit } from "./../../images/add_habit_women.svg";
import { PrimaryButton, Label } from "@fluentui/react";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="welcome-page">
      <section className="welcome-page__text-section">
        <Label>{t("Hello!")}</Label>
        <h2>{t("Establish your habits")}</h2>
        <h3>
          {t(
            "Accroding to studies it takes 21 days to establish a new habit. Change your life by starting today!"
          )}
        </h3>
        <Link to="/summary">
          <PrimaryButton className="start-button" text={t("Start now")} />
        </Link>
      </section>
      <AddHabit />
    </div>
  );
};

export default WelcomePage;
