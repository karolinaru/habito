import {
  IconButton,
  IIconProps,
  Label,
  Panel,
  PanelType,
  PrimaryButton,
} from "@fluentui/react";
import React, { FunctionComponent, useContext, useState } from "react";
import "./HabitSummary.scss";
import { HabitContext } from "../../context/HabitContext";
import AddHabitPanel from "../AddHabitPanel/AddHabitPanel";
import SingleHabitsSection from "../SingleHabitSection/SingleHabitsSection";
import { Habit } from "../../models/habit";
import { useTranslation } from "react-i18next";
import SquareHabitSection from "../SquareHabitSection/SquareHabitSection";
import { Link } from "react-router-dom";

const HabitSummary: FunctionComponent = () => {
  const { t } = useTranslation();

  const { habitsData } = useContext(HabitContext);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const dismissPanel = () => {
    setIsPanelOpen(false);
  };

  const openPanel = () => {
    setIsPanelOpen(true);
  };

  const dailyHabits: Habit[] = [];
  const weeklyHabits: Habit[] = [];

  habitsData?.map((habit) => {
    if (habit.recurrence === "daily") {
      dailyHabits.push(habit);
    }
    if (habit.recurrence === "weekly") {
      weeklyHabits.push(habit);
    }
  });
  const chevronRigth: IIconProps = { iconName: "DoubleChevronRight" };

  return (
    <div className="habit-summary">
      <div className="habit-summary__daily">
        <div className="title-wrapper">
          <Label className="label--h1">{t("Your daily habits")}</Label>
          <Link to={"/daily"}>
            <IconButton iconProps={chevronRigth} className="chevron-rigth" />
          </Link>
        </div>
        {dailyHabits[0] ? (
          <SingleHabitsSection
            key={dailyHabits[0]?.id}
            habit={dailyHabits[0]}
          />
        ) : (
          <Label className="label--h2">
            {t(
              "You haven't set your daily habits yet. Start your dailychallange today!"
            )}
          </Label>
        )}
      </div>
      <div className="habit-summary__weekly">
        <div className="title-wrapper">
          <Label className="label--h1">{t("Your weekly habits")}</Label>
          <Link to={"/weekly"}>
            <IconButton iconProps={chevronRigth} className="chevron-rigth" />
          </Link>
        </div>
        <div className="square-section">
          {weeklyHabits?.map((habit) => {
            return <SquareHabitSection key={habit.id} habit={habit} />;
          })}
        </div>
        {weeklyHabits?.length > 0 ? (
          ""
        ) : (
          <Label className="label--h2">
            {t(
              "You haven't set your weekly habits yet. Start your daily challange today!"
            )}
          </Label>
        )}
      </div>
      <PrimaryButton
        className="add-habit__button"
        text={t("Add new habit")}
        onClick={openPanel}
      />
      <Panel
        headerText={t("Add new habit")}
        isOpen={isPanelOpen}
        onDismiss={dismissPanel}
        isLightDismiss={true}
        closeButtonAriaLabel="Close"
        type={PanelType.medium}
      >
        <AddHabitPanel dismissPanel={dismissPanel} />
      </Panel>
    </div>
  );
};

export default HabitSummary;
