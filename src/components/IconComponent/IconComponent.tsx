import React, { FunctionComponent, useState } from "react";
import { IconButton, IIconProps } from "@fluentui/react";
import "./IconComponent.scss";

interface IIconComponentProps {
  habitType: string | number | undefined;
}

const IconComponent: FunctionComponent<IIconComponentProps> = ({
  habitType,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleIconOnClick = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setClicked(!clicked);
  };

  let iconName;
  switch (habitType) {
    case "drinking":
      iconName = "Drop";
      break;
    case "walking":
      iconName = "Running";
      break;
    case "reading":
      iconName = "ReadingMode";
      break;
    case "sleeping":
      iconName = "PartlyCloudyNight";
      break;
    case "eating":
      iconName = "EatDrink";
      break;
    case "exercise":
      iconName = "Cycling";
      break;
  }

  const icon: IIconProps = { iconName: iconName };

  return (
    <div
      className={clicked ? "icon icon--clicked" : "icon"}
      onClick={(ev) => handleIconOnClick(ev)}
    >
      <IconButton iconProps={icon} />
    </div>
  );
};

export default IconComponent;
