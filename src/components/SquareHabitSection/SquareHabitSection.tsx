import React, { FunctionComponent, useContext } from "react";
import "./SquareHabitSection.scss";
import { HabitContext } from "../../context/HabitContext";
import { Habit } from "../../models/habit";
import IconComponent from "../IconComponent/IconComponent";
import { useTranslation } from "react-i18next";
import { ReactComponent as Reading } from "./../../images/reading.svg";
import { ReactComponent as Drinking } from "./../../images/drinking.svg";
import { ReactComponent as Exercise } from "./../../images/exercise.svg";

interface ISquareHabitSectionProps {
  habit: Habit;
}

const SquareHabitSection: FunctionComponent<ISquareHabitSectionProps> = ({
  habit,
}) => {
  const { t } = useTranslation();

  let habitIcon;
  switch (habit.classification) {
    case "drinking":
      habitIcon = <Drinking />;
      break;
    case "walking":
      habitIcon = `Dodać - ${t("Walking")}`;
      break;
    case "reading":
      habitIcon = <Reading />;
      break;
    case "sleeping":
      habitIcon = `Dodać - ${t("Sleeping")}`;
      break;
    case "eating":
      habitIcon = `Dodać - ${t("Eating")}`;
      break;
    case "exercise":
      habitIcon = <Exercise />;
      break;
  }

  return <div className="square-habit">{habitIcon}</div>;
};

export default SquareHabitSection;
