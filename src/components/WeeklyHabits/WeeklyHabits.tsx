import { Label, Panel, PanelType, PrimaryButton } from "@fluentui/react";
import React, { FunctionComponent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { HabitContext } from "../../context/HabitContext";
import { Habit } from "../../models/habit";
import AddHabitPanel from "../AddHabitPanel/AddHabitPanel";
import SingleHabitsSection from "../SingleHabitSection/SingleHabitsSection";
import "./WeeklyHabits.scss";

const WeeklyHabits: FunctionComponent = () => {
  const { t } = useTranslation();

  const { habitsData } = useContext(HabitContext);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const dismissPanel = () => {
    setIsPanelOpen(false);
  };

  const openPanel = () => {
    setIsPanelOpen(true);
  };

  console.log(habitsData);

  return (
    <div className="new-habit-root">
      <div className="weekly-habits">
        <Label className="label--h1">{t("Your weekly habits")}</Label>
        {habitsData?.map((habit: Habit) => {
          if (habit.recurrence === "weekly") {
            return <SingleHabitsSection key={habit.id} habit={habit} />;
          }
        })}
        <PrimaryButton
          className="add-habit__button"
          text={t("Add new habit")}
          onClick={openPanel}
        />
      </div>
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

export default WeeklyHabits;
