import {
  DefaultButton,
  Dialog,
  DialogFooter,
  DialogType,
  Icon,
  Label,
  PrimaryButton,
} from "@fluentui/react";
import React, { FunctionComponent, useContext, useState } from "react";
import "./SingleHabitsSection.scss";
import { HabitContext } from "../../context/HabitContext";
import { Habit } from "../../models/habit";
import IconComponent from "../IconComponent/IconComponent";
import { useTranslation } from "react-i18next";
import { useId, useBoolean } from "@fluentui/react-hooks";

interface ISingleHabitsSectionProps {
  habit: Habit;
}

const SingleHabitsSection: FunctionComponent<ISingleHabitsSectionProps> = ({
  habit,
}) => {
  const { t } = useTranslation();
  const { habitsData, updateHabits } = useContext(HabitContext);

  const [isChevronUp, setIsChevronDown] = useState(true);

  const chevronOnClick = () => {
    setIsChevronDown(!isChevronUp);
  };

  const icons = [];

  for (let index = 0; index < habit?.frequency!; index++) {
    icons.push(
      <>
        <IconComponent habitType={habit.classification} />
      </>
    );
  }

  const handleHabitDelete = () => {
    const habits = [...habitsData!];
    const index = habits.findIndex((h) => h.id === habit.id);
    habits.splice(index, 1);
    updateHabits(habits);
  };

  let habitName;
  switch (habit.classification) {
    case "drinking":
      habitName = t("Drinking");
      break;
    case "walking":
      habitName = t("Walking");
      break;
    case "reading":
      habitName = t("Reading");
      break;
    case "sleeping":
      habitName = t("Sleeping");
      break;
    case "eating":
      habitName = t("Eating");
      break;
    case "exercise":
      habitName = t("Exercise");
      break;
  }

  const dialogContentProps = {
    type: DialogType.normal,
    title: t("Deleting habit"),
    closeButtonAriaLabel: "Close",
    subText: t("Are you sure you want to delete this habit?"),
  };
  const dialogStyles = { main: { maxWidth: 450 } };

  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const labelId: string = useId("dialogLabel");
  const subTextId: string = useId("subTextLabel");

  const modalProps = React.useMemo(
    () => ({
      titleAriaId: labelId,
      subtitleAriaId: subTextId,
      styles: dialogStyles,
    }),
    [labelId, subTextId]
  );

  return (
    <div
      className={`section ${
        isChevronUp ? "section__collapsed" : "section__extended"
      }`}
    >
      <div className="habit-title">
        <Label onClick={chevronOnClick}>{habitName}</Label>
        <div>
          {" "}
          <Icon
            iconName={isChevronUp ? "ChevronDown" : "ChevronUp"}
            onClick={chevronOnClick}
            className="icon__chevron"
          ></Icon>
          <Icon
            iconName={"Delete"}
            onClick={toggleHideDialog}
            className="icon__delete"
          ></Icon>
        </div>
      </div>
      {isChevronUp ? null : (
        <>
          <div className="icons-wrapper">{icons}</div>
        </>
      )}
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
        <DialogFooter>
          <PrimaryButton
            className="dialog-button dialog-button__delete"
            onClick={handleHabitDelete}
            text={t("Delete")}
          />
          <DefaultButton
            className="dialog-button dialog-button__cancel"
            onClick={toggleHideDialog}
            text={t("Cancel")}
          />
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default SingleHabitsSection;
