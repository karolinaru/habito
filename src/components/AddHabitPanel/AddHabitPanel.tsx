import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
  PrimaryButton,
} from "@fluentui/react";
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from "react";
import "./AddHabitPanel.scss";
import rocket from "../../images/rocket.png";
import { Habit } from "../../models/habit";
import { HabitContext } from "../../context/HabitContext";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { borderRadius: "10px" },
};

interface IAddHabitPanelProps {
  dismissPanel: () => void;
}

const AddHabitPanel: FunctionComponent<IAddHabitPanelProps> = ({
  dismissPanel,
}) => {
  const { t } = useTranslation();

  const classification: IDropdownOption[] = [
    { key: "drinking", text: t("Drinking") },
    { key: "walking", text: t("Walking") },
    { key: "reading", text: t("Reading") },
    { key: "sleeping", text: t("Sleeping") },
    { key: "eating", text: t("Eating") },
    { key: "exercise", text: t("Exercise") },
  ];

  const dailyFrequency: IDropdownOption[] = [
    { key: 1, text: t("Ones a day") },
    { key: 2, text: t("Twice a day") },
    { key: 3, text: t("Three times a day") },
    { key: 4, text: t("Four times a day") },
    { key: 5, text: t("Five times a day") },
    { key: 6, text: t("Six times a day") },
    { key: 7, text: t("Seven times a day") },
  ];

  const weeklyFrequency: IDropdownOption[] = [
    { key: 1, text: t("Ones a week") },
    { key: 2, text: t("Twice a week") },
    { key: 3, text: t("Three times a week") },
    { key: 4, text: t("Four times a week") },
    { key: 5, text: t("Five times a week") },
    { key: 6, text: t("Six times a week") },
    { key: 7, text: t("Seven times a week") },
  ];

  const monthlyFrequency: IDropdownOption[] = [
    { key: 1, text: t("Ones a month") },
    { key: 2, text: t("Twice a month") },
    { key: 3, text: t("Three times a month") },
    { key: 4, text: t("Four times a month") },
    { key: 5, text: t("Five times a month") },
    { key: 6, text: t("Six times a month") },
    { key: 7, text: t("Seven times a month") },
  ];

  const recurrence: IDropdownOption[] = [
    { key: "daily", text: t("Daily") },
    { key: "weekly", text: t("Weekly") },
    { key: "monthly", text: t("Monthly"), disabled: true },
  ];

  const reminder: IDropdownOption[] = [
    { key: "yes", text: t("Yes") },
    { key: "no", text: t("No") },
  ];

  const { addNewHabit } = useContext(HabitContext);
  const [newHabit, setNewHabit] = useState<Habit>({
    id: nanoid(),
    classification: "",
    recurrence: "",
    frequency: "",
  });

  const handleClassificationOnChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    setNewHabit({
      ...newHabit,
      classification: option?.key,
    });
  };

  const handleRecurrenceOnChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    setNewHabit({
      ...newHabit,
      recurrence: option?.key,
    });
  };

  const handleFrequencyOnChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    setNewHabit({
      ...newHabit,
      frequency: option?.key,
    });
  };

  const handleReminderOnChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    setNewHabit({
      ...newHabit,
      reminder: option?.key,
    });
  };

  const handleAddNewHabit = useCallback(() => {
    addNewHabit(newHabit);
    dismissPanel();
  }, [newHabit]);

  return (
    <div className="new-habit">
      <div className="dropdowns">
        <Dropdown
          placeholder={t("Select an option")}
          label={t("Habit")}
          options={classification}
          styles={dropdownStyles}
          onChange={handleClassificationOnChange}
        />
        <Dropdown
          placeholder={t("Select an option")}
          label={t("Recurrence")}
          options={recurrence}
          styles={dropdownStyles}
          onChange={handleRecurrenceOnChange}
        />
        <Dropdown
          placeholder={t("Select an option")}
          label={t("Frequency")}
          options={
            newHabit.recurrence === "monthly"
              ? monthlyFrequency
              : newHabit.recurrence === "weekly"
              ? weeklyFrequency
              : dailyFrequency
          }
          styles={dropdownStyles}
          onChange={handleFrequencyOnChange}
        />
        <Dropdown
          placeholder={t("Select an option")}
          label={t("Reminder")}
          options={reminder}
          styles={dropdownStyles}
          onChange={handleReminderOnChange}
        />
      </div>
      <PrimaryButton
        className="custom-button"
        text={t("Confirm")}
        onClick={handleAddNewHabit}
        allowDisabledFocus
      />
    </div>
  );
};

export default AddHabitPanel;
