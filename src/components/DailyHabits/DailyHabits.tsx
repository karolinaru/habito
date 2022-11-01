import { Label, Panel, PanelType, PrimaryButton } from "@fluentui/react";
import React, { FunctionComponent, useContext, useState } from "react";
import "./DailyHabits.scss";
import { HabitContext } from "../../context/HabitContext";
import AddHabitPanel from "../AddHabitPanel/AddHabitPanel";
import SingleHabitsSection from "../SingleHabitSection/SingleHabitsSection";
import { Habit } from "../../models/habit";
import { useTranslation } from "react-i18next";

const DailyHabits: FunctionComponent = () => {
  const { t } = useTranslation();

  const { habitsData } = useContext(HabitContext);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const dismissPanel = () => {
    setIsPanelOpen(false);
  };

  const openPanel = () => {
    setIsPanelOpen(true);
  };

  return (
    <div className="new-habit-root">
      <div className="daily-habits">
        <Label className="label--h1">{t("Your daily habits")}</Label>
        {habitsData?.map((habit: Habit) => {
          if (habit.recurrence === "daily") {
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

export default DailyHabits;
